import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { addToCart, calculateTotalQuantity } from '../../features/cartSlice'
const Category = () => {
  const { category } = useParams()

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
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  )

  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(calculateTotalQuantity(product))
  }

  return (
    <div className='w-full min-h-[calc(100vh-160px)] bg-[#ffff] p-4'>
      <div className='container'>
        <h1 className='px-3 text-[40px] text-[#6b6b6b] pb-3 capitalize'>
          {category}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
          {filteredProducts.length > 0
            ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className='bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                    <h2 className='text-lg text-gray-700 font-semibold mb-2'>{product.title}</h2>
                    <p className='text-gray-600 mb-2'>Category: {product.category}</p>
                    <p className='text-xl font-bold text-gray-600'>${product.price.toFixed(2)}</p>
                    <div className='flex justify-around items-center mt-4'>
                      <button className='mt-3 px-2 py-2 rounded bg-[#bb95a6] text-[#ffffff] hover:shadow-md transition-colors duration-300 cursor-pointer'>
                        View Details
                                </button>
                      <button onClick={() => handleAddToCart(product)} className='mt-3 border border-[#6BD425]  text-gray-500 px-2 py-2 rounded hover:shadow-md transition-shadow duration-300 cursor-pointer'>
                        Add to cart
                                </button>
                    </div>

                  </div>
                ))
              )
            : (
              <p className='col-span-full text-center text-gray-500'>No products found for this category.</p>
              )}
        </div>
      </div>
    </div>
  )
}

export default Category
