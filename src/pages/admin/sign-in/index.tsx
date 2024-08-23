import InputForm from "@/components/form/InputForm";
import { COLOR } from "@/styles/color";
import { Button, Col, Form, Row } from "antd";

export default function SignIn() {
  return (
    <div style={{
      backgroundColor: COLOR.blue,
      color: "black",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        minHeight: "500px",
        width: "400px",
        borderRadius: 4,
        padding: 10
      }}>
        <Form layout={'vertical'}>
          <Row gutter={16}>
            <Col span={24}>
              <InputForm
                label={"Email"}
                type="Input"
              />
            </Col>
            <Col span={24}>
              <InputForm
                label={"Password"}
                type="Password"
              />
            </Col>
            <Col span={24}>
              <Button style={{
                width: "100%",
                backgroundColor: COLOR.primaryButton,
                color: COLOR.white
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
