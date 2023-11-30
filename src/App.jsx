import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="navbar">
      <Navbar />
      <main>
        <div name="home">
          <Home />
        </div>
      </main>
      <div name="about">
        <About />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="reviews">
        <Review />
      </div>
      <div id="contacts">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
