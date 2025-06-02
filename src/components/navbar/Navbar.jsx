import { Armchair, Check, Info, Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import freya from "../../assets/freya.png";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return ( 
    <div>
       <div className="navbar_top w-full flex items-center h-[45px] justify-center bg-[#b58282]">
       <div className="container flex justify-between items-center">
        <p className="text-sm flex items-center gap-1 font-inter font-normal text-white capitalize"><Check />
         Free shipping on all orders over $50 </p>
         <div className='navbar_top_right  items-center gap-3 lg:flex md:flex hidden'>
            <select defaultValue="Server location" className="select select-neutral h-[30px] w-auto text-sm 
            font-normal capitalize text-white bg-transparent border-white outline-none focus:outline-none rounded">
                <option className='text-black'>eng</option>
                <option className='text-black'>bangla</option>
            </select> 
            <button><Link className='text-sm text-white font-inter font-normal capitalize'>Faqs</Link></button>
            <button><Link className='flex items-center gap-1 text-sm text-white font-inter font-normal capitalize'> <Info/></Link></button>
        </div>
       </div>
       </div>
       <div className='navbar-middle w-full flex items-center justify-center bg-[#f9f9f1] h-[45px]'>
        <div className="container px-4 gap-2 flex justify-between items-center md:justify-between lg:justify-between"> 
             <img src={freya} alt="" />
             <button onClick={handleMenu} className="block md:hidden lg:hidden cursor-pointer">
                    <Menu />
            </button>
            <div className="hidden lg:block md:block search_box">
                        <form action="#" className=" w-[400px] h-[44px] relative">
                            <input type="text" placeholder="Search here..." className=" w-full h-[42px] bg-white rounded-lg  pl-4" />

                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343" /></button>
                        </form>
                    </div>
             {/* navbar middle right  */}
                    <div className="hidden navbar_middle_right lg:flex md:flex items-center gap-1">
                        <button className="btn capitalize">
                            <ShoppingCart color="#574c41" /> <div className="badge text-white badge-sm bg-[#a06464]">0</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart color="#574c41" />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User color="#574c41" /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link>Account</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                       
                    </div>
            </div> 
       </div>
         {isMenuOpen && (
            <div className="lg:hidden md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50">
                <div className="flex justify-end p-4">
                    <button onClick={handleMenu} className="text-2xl"><Menu /></button>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <Link to="/" className="py-2 text-xl font-bold text-[#9c5e5e] font-bold">Home</Link>
                    <Link to="/products" className="py-2 text-xl font-bold text-[#9c5e5e] font-bold">Products</Link>
                    <Link to="/about" className="py-2 text-xl font-bold text-[#9c5e5e] font-bold">About Us</Link>
                    <Link to="/contact" className="py-2 text-xl font-bold text-[#9c5e5e] font-bold"><h2>Contact</h2></Link>
                </div>
            </div>
         )}
    </div>
     );
}
 
export default Navbar;