import { Armchair, Check, Info, Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const handleCartClick = () => {
        if (window.location.pathname === '/shoppingCart') {
            navigate('/');
        } else {
            navigate('/shoppingCart');
        }
    };
    return ( 
    <div>
       <div className="navbar_top w-full flex items-center h-[45px] justify-center bg-[#ffffff]">
       <div className="container flex justify-between items-center">
        <p className="text-sm flex items-center gap-1 font-inter font-normal text-gray-500 capitalize"><Check />
         Free shipping on all orders over $50 </p>
         <div className='navbar_top_right  items-center gap-3 lg:flex md:flex hidden'>
            <select defaultValue="Server location" className="select select-neutral h-[30px] border border-[#c5c5c5] w-auto text-sm 
            font-normal capitalize text-gray-500 bg-transparent outline-none focus:outline-none rounded">
                <option className='text-black'>eng</option>
                <option className='text-black'>bangla</option>
            </select> 
            <button><Link className='text-sm text-gray-500 font-inter font-normal capitalize'>Faqs</Link></button>
            <button><Link className='flex items-center gap-1 text-sm text-gray-500   font-inter font-normal capitalize'> <Info/></Link></button>
        </div>
       </div>
       </div>
       <div className='navbar-middle w-full flex items-center justify-center border-b border-gray-200 bg-[#e9c4ff] h-[45px]'>
        <div className="container px-4 gap-2 flex justify-between items-center md:justify-between lg:justify-between"> 
             <Link to={'/'}><h1 className='text-4xl font-extrabold text-white mb-2'>BE-U</h1></Link>

             <button onClick={handleMenu} className="block md:hidden lg:hidden cursor-pointer">
                    <Menu />
            </button>
            <div className="hidden lg:flex md:flex items-center search_box justify-center">
                        <form action="#" className=" w-[400px] h-[35px] relative">
                            <input type="text" placeholder="Search here..." className=" w-full h-full bg-white border-none text-gray-500 rounded-lg  pl-4 outline-none focus:outline-none" />
                            <button className="absolute right-4 top-[5px] cursor-pointer"><Search size='24px' color="#272343" /></button>
                        </form>
                    </div>
             {/* navbar middle right  */}
                    <div className="hidden navbar_middle_right w-auto lg:flex md:flex items-center gap-1">
                        <button className= "capitalize w-[70px] cursor-pointer p-2 flex bg-transparent border-none shadow-none" onClick={handleCartClick} >
                            <ShoppingCart color="#574c41" /> 
                            <div className="badge border-none text-white badge-sm bg-pink-600">0</div>
                        </button>
                        <button className="btn capitalize  bg-transparent border-none shadow-none">
                            <Heart color="#574c41" />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1  bg-transparent border-none shadow-none"><User color="#574c41" /></div>
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
                    <Link to="/" className="py-2 text-xl font-bold text-[#9c5e5e]">Home</Link>
                    <Link to="/products" className="py-2 text-xl font-bold text-[#9c5e5e]">Products</Link>
                    <Link to="/about" className="py-2 text-xl font-bold text-[#9c5e5e]">About Us</Link>
                    <Link to="/contact" className="py-2 text-xl font-bold text-[#9c5e5e]"><h2>Contact</h2></Link>
                </div>
            </div>
         )}
    </div>
     );
}
 
export default Navbar;