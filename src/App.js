//import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  return (
    <>
        <Header/>
        <Main test="Videojuegos  y consolas de todo tipo" fecha={24}/>
        <ItemCount stock={10} initial={0} />
        <Footer/>
    </>
  )
}

export default App;


