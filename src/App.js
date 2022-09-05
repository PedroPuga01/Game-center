import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Main />
        <Footer/>
    </BrowserRouter>
  );
};

export default App;




// test="Videojuegos  y consolas de todo tipo" fecha={24}