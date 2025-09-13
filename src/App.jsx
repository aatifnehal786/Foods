import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
// import Service from './components/Service'
import Home from './components/Home'
import Header from './components/Header'




function App() {
  

  return (
    <>



    


     <BrowserRouter>

          <Header/> 

     
        <div className="content">
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          <Route path='/product' element={<Product/>}/>



          </Routes>
        </div>
     
     
     </BrowserRouter>
        
    </>
  )
}

export default App