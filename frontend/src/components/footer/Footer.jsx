import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
   <footer className='w-full h-[70px] bg-[#947ba1] flex items-center justify-center bottom-0 left-0 z-50'>
     <p className='text-white text-sm font-inter'>
       &copy; {new Date().getFullYear()} E-Commerce. {t('copyright.all')}
     </p>
   </footer>
 )
}

export default Footer
