import { useSelector } from 'react-redux'
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <div className='w-full min-h-[calc(100vh-160px)] flex flex-col items-start justify-start bg-white p-4'>
      <h1 className='text-gray-600 text-2xl'>Shopping Cart</h1>
      <div className='w-full mt-4'>
        {cartItems?.length > 0
          ? (
              cartItems.map((item) => (
                <div key={item?.id} className='flex items-center justify-between mb-4 p-2 border-b border-gray-200'>
                  <div className='flex items-center'>
                    <img src={item?.image} alt={item?.title} className='w-16 h-16 object-cover rounded mr-4' />
                    <div>
                      <h2 className='text-gray-700 font-semibold'>{item?.title}</h2>
                      <p className='text-gray-500'>${item?.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className='text-gray-600'>Qty: {item?.cartQuantity}</span>
                </div>
              ))
            )
          : (
            <p className='text-gray-500'>Your cart is empty.</p>
            )}
      </div>
    </div>
  )
}

export default ShoppingCart
