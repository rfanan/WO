import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { subscribeToAuthChanges } from "@/lib/config/firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/router";

interface AuthContextProps {
  user: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathnameParts = router.asPath?.split('/').filter(part => part.length > 0);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setUser(user);

      if (!user && pathnameParts[0] === "admin" && pathnameParts[1] !== "sign-in") {
        router.push("/admin/sign-in");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
