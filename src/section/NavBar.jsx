import { 
    Wallet,
    ChevronDown 
} from "lucide-react"
import  Avatar  from '../assets/avatar.png'
import {navLinks} from '../constants/index'
import { useState, useEffect } from "react"
import ThemeSwitch from "../components/ThemeSwitch"
import HamburgerButton from "../components/Hamburger"

const NavBar = () => {

  const [activeNav, setActiveNav] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNav = (index) => {
      setActiveNav(index)
      setIsOpen(false)
  }

  return (
    <header className={`padding-x py-8 sticky top-0 bg-white dark:bg-slate-900 z-10
    ${show ? 'translate-y-0 transition-all duration-400' : '-translate-y-full transition-all duration-300'}
    `}>
        <nav className="max-container flex items-center justify-between">
          <a href="#dashboard">
            <div className="flex items-center justify-center space-x-3">
              <Wallet
              className="w-10 h-10 md:w-12 md:h-12 text-white bg-black dark:bg-violet-600 rounded-xl p-2"
              />
              <span className="font-semibold text-2xl max-xl:text-xl max-md:hidden text-black dark:text-white">
              My Finance</span>
            </div>
          </a>
            

          <ul className={`dark:bg-slate-900 bg-white lg:flex flex-1 justify-center space-x-4 items-center max-lg:absolute max-lg:pb-10 max-xl:space-x-1 w-full text-center top-28 right-0 max-md:px-32 max-lg:px-80 
            ${isOpen ? 'block':'hidden'}
            ${show ? 'translate-y-0 transition-all duration-400' : '-translate-y-full transition-all duration-300'}
          `}>
            {navLinks.map((item, index) => (
              <li   
                key={index}
                className={`xl:px-4 px-3 py-2  
                ${activeNav === index ? 'text-white  dark:bg-slate-800 bg-black rounded-xl': 'dark:text-slate-400 text-slate-500 '}
                `}
                onClick={() => toggleNav(index)}
              >
                <a 
                    href={item.href}
                >
                    {item.label}
                </a>
              </li> 
              ))}
          </ul>
                
          <div className="flex items-center">
            <div className="flex items-center mr-4">
                <ThemeSwitch/>
            </div>

            <div className="flex space-x-3">
              <img 
                  src={Avatar}
                  alt="" 
                  width={50}
                  height={50}
                  className="rounded-full"
              />
              <div className="max-lg:hidden flex flex-col">
                  <span className="dark:text-white">John Doe</span>
                  <span className="dark:text-slate-500 text-slate-400 text-sm mt-2">johndoe@gmail.com</span>
              </div>
              <div className="max-lg:hidden flex items-center">
                  <ChevronDown className="dark:text-white"/>
              </div>
            </div>
            <div className="ml-5 lg:hidden cursor-pointer">
                <HamburgerButton isOpen = {isOpen} toggleMenu = {toggleMenu}/>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default NavBar