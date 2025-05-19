import Footer from "@/components/app-ui/Footer";
import Header from "@/components/app-ui/Header";
import Container from "@/components/common/Container";
import { Outlet } from "react-router-dom";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="py-1">{children}</main>
      <Footer />
    </>
  );
}

export default function MainLayout() {
  return (
    <Container
      className={`relative bg-gradient-to-b min-h-screen from-white via-gray-50 to-white p-0`}
    >
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Container>
  );
}
