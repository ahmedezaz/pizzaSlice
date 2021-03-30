
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
