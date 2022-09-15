import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, ContextProvider } from './components/CartContext/CarContext';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/>
          <Main />
          <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;




// test="Videojuegos  y consolas de todo tipo" fecha={24}