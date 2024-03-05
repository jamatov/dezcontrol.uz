import './App.scss';
import About from './Components/About';
import Bg from './Components/Bg';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Primushestva from './Components/Primushestva';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Primushestva/>
      {/* <Bg/> */}
      <Services/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
