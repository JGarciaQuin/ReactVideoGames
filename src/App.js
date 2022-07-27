import './App.css';
import { NavbarApp } from './components/Navbar/NavbarApp'; 
import { SliderApp} from './components/Slider/SliderApp'; 
import { TextApp} from './components/Textinfo/TextApp';
import { CardsApp} from './components/cards/CardsApp';
import { FooterApp} from './components/footer/FooterApp'; 

function App() {
  return (
    <>
    <NavbarApp/>
    <SliderApp/>
    <TextApp/>
    <CardsApp/>
    <FooterApp/>
    </>
  );
}

export default App;
