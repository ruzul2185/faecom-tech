import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import Top from "../components/Top";

const MainLayout = () => {
  return (
    <>
      <Toaster />
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
