const AllArticles = ({ products, handleAddToCart }) => {
    console.log({products})
  return (
<section className='container bg-[#ffff] px-4 mb-6 pt-0'>
    <div className='container'>
      <h1 className='px-3 text-[40px] text-[#6b6b6b] pb-3 '>All Articles</h1>
      <div className='grid px-3 lg:p-0 md:p-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center md:justify-items-start lg:justify-items-start'>
        {products?.length > 0
          ? (
              products.map((product) => (
                <div key={product.id} className='w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <h2 className='px-2 text-gray-700 font-semibold mb-1'>{product.title}</h2>
                  <p className='px-2 mb-1 font-bold text-gray-600'>${product.price.toFixed(2)}</p>
                    <button   onClick={() => handleAddToCart(product)} className='w-full py-1 block border-t border-gray-200 font-semibold  text-gray-400 hover:bg-gray-50 duration-300 cursor-pointer'>
                      Add to cart
                    </button>
                </div>
              ))
            )
          : (
            <p className='col-span-full text-center text-gray-500'>No products found.</p>
            )}
      </div>
    </div>

</section>
  )
}
export default AllArticles
