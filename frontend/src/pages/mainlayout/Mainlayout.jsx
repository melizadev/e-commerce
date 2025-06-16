import Home from '../../pages/home/Home'
import Auth from '../../auth/auth'
import Login from '../../auth/login/Login'
import Register from '../../register/Register'
import Error from '../../pages/error/error'
import AuthCheck from '../authcheck/AuthCheck'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../../components/navbar/Navbar'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
const Mainlayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/' element={
            <AuthCheck>
              <Home />
            </AuthCheck>
        }
        />
        <Route path='/:category' element={<Category />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Mainlayout
