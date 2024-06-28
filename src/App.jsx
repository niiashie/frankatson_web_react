import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import HomePage from './pages/home'
import PartnersPage from './pages/partners'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import NewsPage  from './pages/news';
import AddNewsPage from './pages/add_news';
import Swal from 'sweetalert2'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App ">
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/partners' element={<PartnersPage/>}/>
         <Route path='/login' element={<LoginPage/>} />
         <Route path = '/register' element={<RegisterPage/>} />
         <Route path = '/news' element={<NewsPage/>} />
         <Route path = "/news/add" element = {<AddNewsPage/>}/>
           {/* <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} /> */}
       </Routes>
    </div>
  )
}

export default App
