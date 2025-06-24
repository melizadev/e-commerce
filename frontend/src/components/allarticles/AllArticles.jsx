import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const AllArticles = ({ products, handleAddToCart }) => {
    const { t } = useTranslation()
      const [selectedCategory, setSelectedCategory] = useState('all')
      const [minPrice, setMinPrice] = useState('')
      const [maxPrice, setMaxPrice] = useState('')    
    // Obtener categorías únicas
    const categories = ['all', ...new Set(products?.map(p => p.category?.toLowerCase()))]

   // Filtrar productos por categoría y rango de precios
  const filteredProducts = products?.filter(product => {
    const inCategory = selectedCategory === 'all' || product.category?.toLowerCase() === selectedCategory
    const inMin = minPrice === '' || product.price >= Number(minPrice)
    const inMax = maxPrice === '' || product.price <= Number(maxPrice)
    return inCategory && inMin && inMax
  })

  return (
    <div className='bg-white container px-4 flex-col  md:flex-col lg:flex-row flex lg:justify-between gap-3 min-h-[450px]'>
       {/* Filtro de categorías y precios */}
      <div className='lg:w-[300px] w-full  bg-white border border-gray-300 rounded'>
            <h1 className='text-1xl text-gray-500 bg-gray-50 py-1'> {t('filter.filter')} </h1>
            <div className='flex lg:flex-col md:flex-row flex-col justify-start gap-2'>
            <div className='flex gap-2'>
            <label className='text-gray-500'>{t('filter.category')}</label>
        <select
          className='border border-gray-200 cursor-pointer rounded w-[110px] px-1 text-gray-500 bg-white'
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
        {categories.map(cat => (
          <option key={cat} value={cat}>
              {cat === 'all' ? t('filter.all') : t(`categories.${cat}`)}
          </option>
        ))}       
    </select>
    </div>
        <div className='flex flex-col items-start h-full sm:flex-row lg:flex-col md:flex-row md:gap-3 gap-1 py-1'>
          <div className='flex items-center gap-2'>
            <label className='text-gray-500'>{t('filter.min_price')}</label>
        <input
          type="range"
          min="0"
          placeholder="Min price"
          className='border rounded px-2 py-1 w-24  bg-gray-100 text-gray-500'
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        />
        <span className='text-gray-500'>${minPrice}</span>
        </div>
        <div className='flex items-center gap-2'>
          <label className='text-gray-500'>{t('filter.max_price')}</label>
        <input
          type="range"
          min="0"
          placeholder="Max price"
          className='border rounded px-2 py-1 w-24  bg-gray-100 text-gray-500'
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
        <span className='text-gray-500'>${maxPrice}</span></div>
        
        </div>
      </div>
      </div>
      {/* Mostrar productos filtrados solo si se ha seleccionado algo en el filtro */}
        <div className='w-full flex flex-col border-b border-gray-200'>
            <h1 className='text-2xl text-gray-500 pl-4'>{t('filter.articles')}</h1>
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center bg-white mt-2">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="flex flex-col justify-between items-start bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className='text-gray-600 font-semibold mb-1 pl-2'>{product.title}</h2>
                <p className='font-bold text-gray-500 mb-1 pl-2'>${product.price.toFixed(2)}</p>
                <button   onClick={() => handleAddToCart(product)} className='w-full block border-t border-gray-200 font-semibold  text-gray-400 py-1 hover:bg-gray-50 duration-200 cursor-pointer'>
                    {t('cart.add')}
                </button>              </div>
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>No products found.</p>
          )}
        </div>
        </div>
    </div>
  )
}

export default AllArticles
