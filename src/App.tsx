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
import QAService from "./pages/Services/QAService";
import CustomService from "./pages/Services/CustomService";
import UnityService from "./pages/Services/UnityService";
import WebDevService from "./pages/Services/WebDevService";
import DigitalMarketingService from "./pages/Services/DigitalMarketingService";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs/>} />

          {/* Services */}
          <Route path="/services" element={<Services/>} />
          <Route path="/services/aws" element={<AWSService/>} />
          <Route path="/services/salesforce" element={<SalesforceService/>} />
          <Route path="/services/sap" element={<SAPService/>} />
          <Route path="/services/zoho" element={<ZohoService/>} />
          <Route path="/services/qa" element={<QAService/>} />
          <Route path="/services/custom" element={<CustomService/>} />
          <Route path="/services/unity" element={<UnityService/>} />
          <Route path="/services/web-dev" element={<WebDevService/>} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService/>} />

          {/* Trainings */}
          <Route path="/trainings" element={<Trainings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
