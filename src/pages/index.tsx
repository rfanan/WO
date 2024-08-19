import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { getFirebaseAuth, subscribeToAuthChanges } from "@/config/firebase";
import { Button, Col, Modal, Row } from "antd";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";

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
      <Row gutter={12}
        justify="end"
        style={{ padding: '10px' }}
      >
        <Col>
          {user?.email || 'please login'}
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={handleGoogleLogin}>
            Login
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={logUser}
          >
            test log
          </Button>
        </Col>
      </Row>
    )
  }

  return (
    <>
      {renderAuthUi()}
      <div className="h-screen content-center">
        <h1 className="text-center text-2xl">Halo dunia !</h1>
      </div>
    </>
  );
}
