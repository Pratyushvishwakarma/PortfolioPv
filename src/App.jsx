import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
// import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <Router>
      <div className="flex flex-row space-x-4 bg-gray-800 p-1 text-white">
</div>

      <div className="bg-[#050414] relative">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            {/* <Route path="/projects" element={<Work />} /> */}
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
