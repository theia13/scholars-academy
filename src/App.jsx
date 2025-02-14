import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import ChatWithUs from "./components/ChatWithUs";
import NewsSection from "./components/NewsSection";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ChatWithUs />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <NewsSection />
            </>
          }
        />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
