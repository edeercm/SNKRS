import './App.css'
import './Reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopContext from './components/shopcontext'
import Layout from './components/Layout'
import Home from './pages/Home/home'
import Shop from './pages/Shop/shop'
// import Blog from './pages/blog'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Wishlist from './pages/wishlist'
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
          <Route path='shop' element={<Shop />} />
          {/* <Route path='blog' element={<Blog />} /> */}
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='wishlist' element={<Wishlist />} />
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
