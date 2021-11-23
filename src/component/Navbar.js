import {Link,NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react';



const Navbar = () => {
    let [navscroll, setNavscroll] = useState(false)

    let handleScroll = () => {
        if(window.scrollY >= 15){
            setNavscroll(true)
        }else{
            setNavscroll(false)
        }
    }

    window.addEventListener('scroll',handleScroll)

    return (
        <>

        <nav className={navscroll ? 'w-full flex flex-row justify-between px-2 lg:px-5 py-2 text-white bg-green-600 items-center transition duration-700 fixed top-0' : 'w-full flex flex-row justify-between px-2 lg:px-5 py-2 items-center text-green-600 lg:bg-white transition duration-700' }>
           <div className="w-5/6 mx-auto flex justify-between">
           <div className="w-full lg:w-3/5">
                <Link to="/">
                <h1 className="text-xl lg:text-3xl font-bold">cryptonesia</h1>
                </Link>
            </div>
            <div className="nav-link w-2/5 justify-around text-lg hidden lg:flex ">
                <NavLink exact={true} to="/" activeClassName="selected" className="font-bold">
                    Home
                </NavLink>
                <NavLink to="/crypto" activeClassName="selected" className="font-bold">
                    Crypto
                </NavLink>
                <NavLink to="/news" activeClassName="selected" className="font-bold">
                    News
                </NavLink>
                <NavLink to="/calculator" activeClassName="selected" className="font-bold">
                    Calculator
                </NavLink>
                <NavLink to="/about" activeClassName="selected" className="font-bold">
                    About
                </NavLink>
            </div>
           </div>
        </nav>

   {/* mobile nav */}
    <nav className="fixed flex lg:hidden flex mx-auto flex justify-between px-5 py-2  fixed bottom-0 left-0 right-0 w-full z-10 bg-white">
   <div className="nav-link w-full flex justify-between text-lg">

       <NavLink exact={true} to="/" activeClassName="selected" className="flex flex-col items-center  px-2 py-1 text-xs">
       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            
           home
       </NavLink>

       <NavLink to="/news" className="flex flex-col items-center  px-2 py-1 text-xs " activeClassName="selected">
       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
           news
       </NavLink>

       <NavLink to="/calculator" activeClassName="selected" className="flex flex-col items-center  px-2 py-1 text-xs">
       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
           calculator
       </NavLink>

       <NavLink to="/about" activeClassName="selected" className="flex flex-col items-center px-2 py-1 text-xs">
       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           about
       </NavLink>
   </div>
    </nav>
    </>
   )
}

export default Navbar
