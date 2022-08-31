//import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {

  const onAdd = () =>{
    
    console.log("Agregaste elementos al carrito")
  }
  return (
    <>
        <Header/>
        <Main test="Videojuegos  y consolas de todo tipo" fecha={24}/>
        <Counter stock={10} initial={0} onAdd={onAdd}/>
        <Footer/>
    </>
  )
}

export default App;


