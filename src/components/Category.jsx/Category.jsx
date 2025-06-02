const Category = () => {
    const products = [
  {
    id: 1,
    title: "Elegant Dress",
    slug: "elegant-dress",
    price: 59.99,
    category: "Dresses"
  },
  {
    id: 2,
    title: "Classic Heels",
    slug: "classic-heels",
    price: 39.99,
    category: "Heels"
  },
  {
    id: 3,
    title: "Summer Top",
    slug: "summer-top",
    price: 19.99,
    category: "Tops"
  },
  {
    id: 4,
    title: "Denim Skirt",
    slug: "denim-skirt",
    price: 29.99,
    category: "Skirts"
  },
  {
    id: 5,
    title: "Casual Pants",
    slug: "casual-pants",
    price: 34.99,
    category: "Pants"
  },
  {
    id: 6,
    title: "Leather Jacket",
    slug: "leather-jacket",
    price: 89.99,
    category: "Jackets"
  },
  {
    id: 7,
    title: "Sport Sneakers",
    slug: "sport-sneakers",
    price: 49.99,
    category: "Shoes"
  },
  {
    id: 8,
    title: "Floral Blouse",
    slug: "floral-blouse",
    price: 24.99,
    category: "Tops"
  },
  {
    id: 9,
    title: "Wool Sweater",
    slug: "wool-sweater",
    price: 44.99,
    category: "Sweaters"
  },
  {
    id: 10,
    title: "Mini Skirt",
    slug: "mini-skirt",
    price: 27.99,
    category: "Skirts"
  }
];
  return (
    <div className="w-full max-h-[551px]">
        <div className="container">
            <h1 className=" px-3 text-[40px] text-[#6b6b6b] pb-3">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">Category: {product.category}</p>
                        <p className="text-xl font-bold text-[#a06464]">${product.price.toFixed(2)}</p>
                        <button className="mt-3 bg-[#a06464] text-white px-4 py-2 rounded hover:bg-[#8c5a5a] transition-colors duration-300">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            
        </div>
      
    </div>
  )
}

export default Category
