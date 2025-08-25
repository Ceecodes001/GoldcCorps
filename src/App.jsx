import { BrowserRouter, Routes, Route } from "react-router-dom";
import HEADER from "./components/homepage1/head/header";
import BODY from "./components/homepage1/body/body";
import BODYC from "./components/homepage1/body-content/body-content";
import STATS from "./components/homepage1/status/status";
import FOOTER from "./components/homepage1/footer/footer";
import "./App.css";
import DASHBOARD from "./components/profile/dashboard";
import LOGIN from "./components/homepage1/auth/login";
import SIGNUP from "./components/homepage1/auth/signup";
import STOCK from "./components/homepage1/stock/stock";
import PROFILE from "./components/profile/profile";
import NotFound from "./components/error/404"; // ✅ Import new 404 page

function Home() {
  return (
    <>
      <HEADER />
      <BODY />
      <BODYC />
      <STATS />
      <FOOTER />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/GoldcCorps">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/signup" element={<SIGNUP />} />
        <Route path="/dashboard" element={<DASHBOARD />} />
        <Route path="/profile" element={<PROFILE />} />
        <Route path="/stock" element={<STOCK />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ Use imported component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
