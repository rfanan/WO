import InputForm from "@/components/form/InputForm";
import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { getFirebaseAuth } from "@/lib/config/firebase";
import { COLOR } from "@/styles/color";
import { defaultRequiredRules } from "@/util/common";
import { Button, Col, Form, Row } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn() {
  const [form]: any = Form.useForm();
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  function handleLogin(item: any) {
    setIsLoading(true)
    try {
      const auth = getFirebaseAuth();
      signInWithEmailAndPassword(auth, item['email'], item['password'])
        .then((userCredential) => {
          const user = userCredential.user;
          router.push("/admin/dashboard")
          setIsLoading(false)
        })
        .catch((error: any) => {
          defaultErrorModal(error.message)
          setIsLoading(false)
        });
    } catch (error) {
      defaultErrorModal(error)
      setIsLoading(false)
    }
  }

  return (
    <div style={{
      backgroundColor: COLOR.blue,
      color: "black",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        backgroundColor: "white",
        width: "400px",
        borderRadius: 4,
        padding: 30
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20
        }}>
          Admin Login
        </div>
        <Form
          form={form}
          onFinish={handleLogin}
          layout={'vertical'}
          requiredMark={false}>
          <Row gutter={16}>
            <Col span={24}>
              <InputForm
                label={"Email"}
                type="Input"
                name={"email"}
                rules={[
                  { type: 'email', message: 'Please enter valid email address' },
                  { min: 4, message: 'Please enter valid email address' },
                  ...defaultRequiredRules()
                ]}
              />
            </Col>
            <Col span={24}>
              <InputForm
                name={"password"}
                label={"Password"}
                type="Password"
                rules={defaultRequiredRules()}
              />
            </Col>
            <Col span={24}>
              <Button loading={isLoading} htmlType={"submit"} style={{
                width: "100%",
                backgroundColor: COLOR.primaryButton,
                color: COLOR.white,
                fontWeight: "bold"
              }}>
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
