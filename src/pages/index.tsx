import ButtonPrimary from "@/components/button/ButtonPrimary";
import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { getFirebaseAuth, subscribeToAuthChanges } from "@/config/firebase";
import { Button, Col, Modal, Row } from "antd";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Buttonn from "@/components/button";
import ButtonTest from "@/components/button";

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
        <Col>{user?.email || "please login"}</Col>
        <Col>
          <Button type="primary" onClick={handleGoogleLogin}>
            Login
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => defaultErrorModal("modal private")}
          >
            test log
          </Button>
        </Col>
        <Col>
          <ButtonPrimary disabled={true} onClick={() => {}}>
            Save This Event
          </ButtonPrimary>
        </Col>
      </Row>
    );
  }

  return (
    <>
      {renderAuthUi()}
      <div className="h-screen content-center">
        <h1 className="text-center text-2xl">Halo dunia !</h1>
        <div className="h-screen text-center content-center gap-9">
          <h1 className="text-2xl">Halo dunia !</h1>
          <div className="gap-5">
            <Button>button </Button>
            <ButtonTest className={"py-8 px-5 rounded-lg bg-teal-500"}>
              btn test
            </ButtonTest>
          </div>
        </div>
      </div>
    </>
  );
}
