import DashboardHeader from "@/components/common/DashboardHeader";
import SideNavigation from "@/components/common/SideNavigation";
import { AuthProvider } from "@/lib/auth";
import "@/styles/globals.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathnameParts = router.asPath?.split('/').filter(part => part.length > 0);

  useEffect(() => {
    console.log('router path', router.asPath);
    console.log('pathnameParts', pathnameParts);
  }, [])

  const [collapsed, setCollapsed] = useState(false);

  function renderContentWithNavigationAndHeader() {
    return (
      <Layout style={{ height: "100vh" }}>
        <SideNavigation collapsed={collapsed} />
        <Layout>
          <DashboardHeader collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
          <Content>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </Content>
        </Layout>
      </Layout>
    )
  }

  function renderContentOnly() {
    return <Component {...pageProps} />
  }

  if (pathnameParts[0] == "admin") {
    if (pathnameParts[1] == "sign-in") {
      return renderContentOnly()
    }
    return renderContentWithNavigationAndHeader()
  } else {
    return renderContentOnly()
  }
}
