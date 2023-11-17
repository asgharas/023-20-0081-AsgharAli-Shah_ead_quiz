import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Offerings from './components/Offerings';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Offerings />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
