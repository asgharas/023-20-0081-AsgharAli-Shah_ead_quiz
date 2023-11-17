import './App.css';
import MyNavbar from './components/MyNavbar';
import Welcome from './components/Welcome';
import Offerings from './components/Offerings';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <Offerings />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
