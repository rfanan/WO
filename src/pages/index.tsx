import ButtonPrimary from "@/components/button/ButtonPrimary";
import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { getFirebaseAuth, subscribeToAuthChanges } from "@/config/firebase";
import { Col, Modal, Row } from "antd";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { IconBrandGithub, IconLogin } from "@tabler/icons-react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(setUser);
    return () => unsubscribe();
  }, []);

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

  function logUser() {
    console.log("loguser = ", user.email);
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
