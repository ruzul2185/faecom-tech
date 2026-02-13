import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
