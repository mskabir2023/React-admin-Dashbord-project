import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


import Sidebar from './components/Sidebar';
import About from'./pages/About';
import Comment from './pages/Comment';
import Dashbord from './pages/Dashboard';
import Product from './pages/Product';
import Analytics from './pages/Analytics';
import Productlist from './pages/Productlist'; 

function App() {
  

  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashbord />}/>
      <Route path='/dashbord' element={<Dashbord />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/comment' element={<Comment />}/>
      <Route path='/analytics' element={<Analytics />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/productList' element={<Productlist />}/>
      
    </Routes>
    </Sidebar>

    </BrowserRouter>
    
  )
}

export default App
