import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { Col, Row } from "antd";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { API_getUsers } from "@/lib/api/api";
import Button from "@/components/button";
import { IconLogin } from "@tabler/icons-react";
import { getFirebaseAuth, subscribeToAuthChanges } from "@/lib/config/firebase";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(setUser);
    return () => unsubscribe();
  }, []);


  async function getApiTest() {
    let token = await user?.getIdToken();
    let body = {};

    try {
      let result = await API_getUsers(token, body);
      if (result.body.is_success) {
        console.log("Call API_getUsers success");
      } else {
        defaultErrorModal(result.body.data)
      }
    } catch (error) {
      defaultErrorModal("Call API error")
    }
  }

  async function handleGoogleLogin() {
    try {
      const auth = getFirebaseAuth();
      await auth.signOut();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in user:", result.user);
    } catch (error) {
      defaultErrorModal();
    }
  }

  function renderAuthUi() {
    return (
      <Row gutter={12} justify="end" style={{ margin: "10px" }}>
        <Col className="flex items-center">{user?.displayName}</Col>
        <Col>
          <Button onClick={handleGoogleLogin}>
            Login
            <IconLogin />
          </Button>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <div className="bg-white h-screen text-slate-950">
        <div className="w-full px-5 bg">
          <div className="flex items-center justify-between">
            <div>Logo</div>
            <div className="flex gap-6">
              <div>Home</div>
              <div>About</div>
              <div>Service</div>
              <div>Package</div>
              <div>Portolio</div>
            </div>
            <div className="text-slate-100">{renderAuthUi()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
