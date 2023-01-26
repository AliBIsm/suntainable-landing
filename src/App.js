import logo from './logo.svg';
import './App.css';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Team from './sections/Team';
import Contactus from './sections/Contactus';
function App() {
  return (
    <div className="App">
      <AboutUs />
      <Services />
      <Team />
      <Contactus />

    </div>
  );
}

export default App;
