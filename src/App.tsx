import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services"
import MainLayout from "./layouts/MainLayout";
import Trainings from "./pages/Trainings";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/trainings" element={<Trainings/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
