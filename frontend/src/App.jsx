import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavSection from "./components/Navbar";

function App() {
  return (
    <>
      <NavSection />

      <section>
        <h1>This is the main component i.e the App Component</h1>
        <Hero />
      </section>

      <Footer />
    </>
  );
}

export default App;
