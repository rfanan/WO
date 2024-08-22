import ButtonPrimary from "@/components/button/ButtonPrimary";
import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { getFirebaseAuth, subscribeToAuthChanges } from "@/lib/config/firebase";
import { Button, Col, Modal, Row } from "antd";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Buttonn from "@/components/button";
import ButtonTest from "@/components/button";
import { API_getUsers } from "@/lib/api/api";

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
          <Button
            type="primary"
            onClick={() => getApiTest()}
          >
            test call api
          </Button>
        </Col>
        <Col>
          <ButtonPrimary disabled={true} onClick={() => { }}>
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
