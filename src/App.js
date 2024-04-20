import Card from './components/Card';
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (<>


    <div>
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/shoppingcart' element={<ProductCard/>}/> 
        </Routes>
      </Router>
    </div>


    
    <Card/>
    <ProductCard/>
  </>  );
}

export default App;