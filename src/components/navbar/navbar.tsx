import { getFirebaseAuth, subscribeToAuthChanges } from "@/lib/config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import React, { useEffect, useState } from "react";
import { defaultErrorModal } from "../modal/DefaultErrorModal";
import Button from "../button/button";
import { IconUser } from "@tabler/icons-react";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(setUser);
    return () => {
      unsubscribe();
    };
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

  return (
    <div>
      <div className="w-full px-10 py-6">
        <div className="relative items-center ">
          <div className="flex justify-between">
            <div>
              <div>logo</div>
            </div>
            <div className="flex gap-5 font-medium">
              <div>Home</div>
              <div>About</div>
              <div>Service</div>
              <div>Package</div>
              <div>Portfolio</div>
            </div>
            <div>
              <div>
                <Button onClick={handleGoogleLogin}>
                  <IconUser />
                  {user?.displayName || "login"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
