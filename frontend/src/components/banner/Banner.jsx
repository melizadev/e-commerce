import { useTranslation } from 'react-i18next'
import baner from '../../assets/baner.jpg'
const Banner = () => {
  const { t } = useTranslation()
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between mt-2 mb-2 px-2">
      <div className="flex flex-row md:flex-row lg:flex-col  justify-center items-start w-full lg:w-1/2 mb-4 lg:mb-">
        <div className='sm:h-[200px] lg:h-auto md:h-[200px] flex flex-col justify-center w-full'>
           <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#919191] mb-2">
          {t('homepage.title1')} <br /> {t('homepage.title2')}
        </h1>
        <h3 className="text-gray-600 text-base md:text-lg">
          {t('homepage.clothing')}{' '}
          <span className="text-pink-700">{t('homepage.attitute')}</span> {t('homepage.version')}
          <br /> {t('homepage.style')}
        </h3></div>
        <button className="mt-4 text-1xl bg-pink-600 hover:bg-pink-700 transition-colors duration-200 cursor-pointer text-white font-semibold py-2 px-2 rounded">
          {t('homepage.more')}
        </button>
      </div>
      <div className="w-full flex justify-center items-center">
        <img
          src={baner}
          alt="banner"
          className="w-full h-[350px] md:h-[300px] lg:h-[530px] object-cover"
        />
      </div>
    </div>
  )
}

export default Banner