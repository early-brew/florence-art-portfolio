import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Services } from "./Services";
import Products from "./Products";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
import CookiesPolicy from "./Policies/CookiesPolicy";
import AppFooter from "./AppFooter";
import { useEffect } from "react";
import { isPrerender } from "./utils/isPrerender";
import Navbar from "./NavBar";
import { Home } from "./Home";

/* ------------------ Redirect Handling ------------------ */

const RedirectHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.dispatchEvent(new Event("prerender-ready"));
  }, []);

  useEffect(() => {
    if (isPrerender()) return;
    const path = sessionStorage.getItem("redirectPath");
    if (path) {
      sessionStorage.removeItem("redirectPath");
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
};

const CatchAll = () => {
  const location = useLocation();
  const pending = sessionStorage.getItem("redirectPath");

  if (pending && !isPrerender()) return <RedirectHandler />;

  const path = location.pathname.toLowerCase();

  if (path.includes("/products")) return <Products />;
  if (path.includes("/services")) return <Services />;
  if (path.includes("/privacy-policy")) return <PrivacyPolicy />;
  if (path.includes("/cookies-policy")) return <CookiesPolicy />;

  return <Home />;
};

/* ------------------ Home Component ------------------ */

/* ------------------ App ------------------ */

function App() {
  console.log("AHAOIJAOIDJAOPI");
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/privacy-policy/*" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy/*" element={<CookiesPolicy />} />
          <Route path="*" element={<CatchAll />} />
        </Routes>
      </main>

      <AppFooter />
    </div>
  );
}

export default App;
