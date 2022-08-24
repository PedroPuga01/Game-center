//import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';

const App = () => {
  return (
    <>
      <div className='mainContainer'>
        <Header/>
        <div className='bodyContainer'>
          <Main test="Videojuegos  y consolas de todo tipo" fecha={24}/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App;


