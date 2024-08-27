import { getFirebaseAuth } from "@/lib/config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { defaultErrorModal } from "../modal/DefaultErrorModal";
import Button from "../button/button";
import { IconUser } from "@tabler/icons-react";
import { useAuth } from "@/lib/auth";

const Navbar = () => {
  const { user } = useAuth();

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
      <div className="w-full px-5 md:py-5">
        <div className="items-center ">
          <div className="flex justify-between">
            <div>
              <div>logo</div>
            </div>
            <div className="hidden md:flex gap-5 font-medium">
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
