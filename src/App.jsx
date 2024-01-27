import './App.css'
import './Reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopContext from './components/shopcontext'
import Layout from './components/layout'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/login'
import ResetPassword from './pages/ResetPassword/resetpassword'
import CreateAccount from './pages/CreateAccount/createaccount'
import Cart from './pages/Cart/cart'
import Details from './pages/Details/details'

function App() {
  return <>
  <ShopContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Shop' element={<Shop />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='resetpassword' element={<ResetPassword />} />
          <Route path='createaccount' element={<CreateAccount />} />
          <Route path='cart' element={<Cart />} />
          <Route path='details' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ShopContext>
  </>
}

export default App
