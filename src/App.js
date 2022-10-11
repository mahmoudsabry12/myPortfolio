import Navebar from "./component/Navebar";
import '../src/App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navebar/>
      <Intro />
      <Services/>
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {/* محسوبك صبري */}
    </div>
  );
}

export default App;
