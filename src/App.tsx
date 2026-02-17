import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services/Services";
import MainLayout from "./layouts/MainLayout";
import Trainings from "./pages/Trainings/Trainings";
import Blogs from "./pages/Blogs";
import AWSService from "./pages/Services/AWSService";
import SalesforceService from "./pages/Services/SalesforceService";
import SAPService from "./pages/Services/SAPService";
import ZohoService from "./pages/Services/ZohoService";

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
          <Route path="/services/aws" element={<AWSService/>} />
          <Route path="/services/salesforce" element={<SalesforceService/>} />
          <Route path="/services/sap" element={<SAPService/>} />
          <Route path="/services/zoho" element={<ZohoService/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
