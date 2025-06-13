import baner from '../../assets/baner.jpg';

const Banner = () => {
  return (
    <div className='max-h-[640px] pt-4 container bg-white flex items-center justify-between lg:flex-row md:flex-row flex-col sm:flex-col p-2'>
        <div>
            <h1 className='text-3xl lg:text-6xl md:text-4xl font-extrabold text-[#919191] mb-2'>Your Style, <br/> Your Essence</h1>
            <h3 className=' text-gray-600'>Clothing with <span className='text-pink-700 '>attitude</span> , for every version of you. <br/> Find your style here.</h3>
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 transition-bg duration-200 cursor-pointer text-white font-semibold py-2 px-6 rounded">
                See more...
            </button>
        </div>
        <div className='w-100px h-full pt-4'><img src={baner} alt="" className='w-full rounded object-cover h-full' /></div>
      
    </div>
  )
}

export default Banner
