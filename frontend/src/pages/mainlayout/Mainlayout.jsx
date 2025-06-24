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
import { useDispatch } from 'react-redux'
import { addToCart, calculateTotalQuantity } from '../../features/cartSlice'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
const Mainlayout = () => {
      const { t } = useTranslation()
    const products = [
    { id: 1, title: 'Elegant Dress', slug: 'elegant-dress', price: 59.99, category: 'Dresses' },
    { id: 2, title: 'Classic Heels', slug: 'classic-heels', price: 39.99, category: 'Heels' },
    { id: 3, title: 'Summer Top', slug: 'summer-top', price: 19.99, category: 'Tops' },
    { id: 4, title: 'Denim Skirt', slug: 'denim-skirt', price: 29.99, category: 'Skirts' },
    { id: 5, title: 'Casual Pants', slug: 'casual-pants', price: 34.99, category: 'Pants' },
    { id: 6, title: 'Leather Jacket', slug: 'leather-jacket', price: 89.99, category: 'Tops' },
    { id: 7, title: 'Sport Sneakers', slug: 'sport-sneakers', price: 49.99, category: 'Heels' },
    { id: 8, title: 'Floral Blouse', slug: 'floral-blouse', price: 24.99, category: 'Tops' },
    { id: 9, title: 'Wool Sweater', slug: 'wool-sweater', price: 44.99, category: 'Tops' },
    { id: 10, title: 'Mini Skirt', slug: 'mini-skirt', price: 27.99, category: 'Skirts' }
  ]
  
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product))
      dispatch(calculateTotalQuantity(product))
      toast.success(`${t('cart.action_add1')} ${product?.title} ${t('cart.action_add2')}`)
    } catch (error) {
      console.error(error)
      toast.error('Oops, there seems to be an error')
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/' element={
            <AuthCheck>
              <Home products={products} handleAddToCart={handleAddToCart}/>
            </AuthCheck>
                }
        />
        <Route path='/:category' element={<Category products={products} handleAddToCart={handleAddToCart} />} />
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
