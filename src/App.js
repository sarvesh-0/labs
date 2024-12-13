import logo from './logo.svg';
import './App.css';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Items from './ItemParent';
import ContactComponent from './ContactComponent';


function App() {
  return (
    <>
    <Header></Header>
    <Items></Items>
    <Footer></Footer>
    <ContactComponent></ContactComponent>
    </>
  );
}

export default App;
