'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const NavBar: React.FC = () => {

     const useWindowSize = () => {
          const [size, setSize] = useState([0, 0]);
      
          useEffect(() => {
              const updateSize = () => {
                  setSize([window.innerWidth, window.innerHeight]);
              };
              window.addEventListener('resize', updateSize);
              updateSize();
              return () => window.removeEventListener('resize', updateSize);
          }, []);
      
          return size;
      };
      
      const [width] = useWindowSize(); 
      const isMobile = width < 768;
const [showEventsDropdown, setShowEventsDropdown] = useState(false);
const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
const [showMobileEventsDropdown, setShowMobileEventsDropdown] = useState(false);
const [showMobileProjectsDropdown, setShowMobileProjectsDropdown] = useState(false);
const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
const dropdownRef = useRef<HTMLDivElement | null>(null);
const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);
const mobileNavbarRef = useRef<HTMLDivElement | null>(null);

const toggleEventsDropdown = () => {
     setShowEventsDropdown(!showEventsDropdown);
     setShowProjectsDropdown(false);
};

const toggleProjectsDropdown = () => {
     setShowProjectsDropdown(!showProjectsDropdown);
     setShowEventsDropdown(false);
};

const handleDropdownLinkClick = () => {
     setShowEventsDropdown(false);
     setShowProjectsDropdown(false);
};

const toggleMobileEventsDropdown = () => {
     setShowMobileEventsDropdown(!showMobileEventsDropdown);
};

const toggleMobileProjectsDropdown = () => {
     setShowMobileProjectsDropdown(!showMobileProjectsDropdown);
};

const handleMobileDropdownLinkClick = () => {
     setShowMobileEventsDropdown(false);
     setShowMobileProjectsDropdown(false);
};

const toggleMobileMenu = () => {
     setShowMobileEventsDropdown(false);
     setShowMobileProjectsDropdown(false);
     setMobileMenuVisible(!mobileMenuVisible);
};

useEffect(() => {
	const handleOutsideClick = (event: MouseEvent) => { 
		if (mobileNavbarRef.current && !mobileNavbarRef.current.contains(event.target as HTMLElement)) {
			handleMobileDropdownLinkClick();
			toggleMobileMenu();
			setMobileMenuVisible(false);
		}
          
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
			handleDropdownLinkClick();
		}
	};

	document.addEventListener('mousedown', handleOutsideClick);

	return () => {
		 document.removeEventListener('mousedown', handleOutsideClick);
	};
}, [dropdownRef, mobileNavbarRef]);

useEffect(() => {
     const handleScroll = () => {
          const isAtTop = window.scrollY === 0;
          setIsNavbarAtTop(isAtTop);

          if (isAtTop && mobileMenuVisible) {
               setShowEventsDropdown(false);
               setShowProjectsDropdown(false);
               setShowMobileEventsDropdown(false);
               setShowMobileProjectsDropdown(false);
               setMobileMenuVisible(false);
          }
     };

     window.addEventListener('scroll', handleScroll);

     return () => {
          window.removeEventListener('scroll', handleScroll);
     };
}, [mobileMenuVisible]);

const [menuOpen, setMenuOpen] = useState(false);
const handleNav = () => {
     setMenuOpen(!menuOpen);
}

const defaultMenu = () => {
     return (
          <>
               <div className="relative group">
                    <button onClick={toggleEventsDropdown} className="flex items-center cursor-pointer font-medium hover:text-coral-pink hidden md:flex">
                         Events

                         <span className="pl-2">
                              <AiOutlineDown />
                         </span>
                    </button>
                    
                    {showEventsDropdown && (
                         <div ref={dropdownRef} className="absolute mt-2 bg-white border rounded-md text-left font-normal w-max">
                              <Link href="/events" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Overview
                              </Link>
                              
                              <Link href="/events/dev-day" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Dev Day
                              </Link>

                              <Link href="/events/cs-expo" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   CS Expo
                              </Link>

                              <Link href="/events/committees" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Committees
                              </Link>
                         </div>
                    )}
               </div>

               <div className="relative group">
                    <button onClick={toggleProjectsDropdown} className="flex items-center cursor-pointer ml-4 font-medium hover:text-coral-pink hidden md:flex">
                         Projects

                    <span className="pl-2">
                         <AiOutlineDown />
                    </span>
                    </button>

                    {showProjectsDropdown && (
                         <div ref={dropdownRef} className="absolute mt-2 bg-white border rounded-md font-normal w-max">
                              <Link href="/projects" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Overview
                              </Link>

                              <Link href="/projects/hall-of-fame" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Hall of Fame
                              </Link>

                              <Link href="/projects/collections-of-projects" className="block px-4 py-2 hover:text-coral-pink" onClick={handleDropdownLinkClick}>
                                   Collections of Projects
                              </Link>
                         </div>
                    )}
               </div>

               <Link href="/partners" className="cursor-pointer ml-4 font-medium hover:text-coral-pink">
                    Partners
               </Link>
          </>
     );};

     const mobileMenu = () => {
          // Dynamic class for text color
          const textColorClass = isNavbarAtTop ? 'text-black' : 'text-timberwolf';
     
          return (
               <div className={`mobile-menu flex flex-col px-6 py-3 items-start font-semibold ${textColorClass}`}>
               <div className="relative group">
                    <button onClick={toggleMobileEventsDropdown} className="flex items-center cursor-pointer hover:text-coral-pink">
                         Events
                              <span className="pl-2">
                                   <AiOutlineDown />
                              </span>
                    </button>

                    {showMobileEventsDropdown && (
                         <div className="relative m-4 flex flex-col text-left font-normal w-max">
                              <Link href="/events" onClick={handleMobileDropdownLinkClick} className='hover:text-coral-pink'>
                                   Overview
                              </Link>

                              <Link href="/events/dev-day" onClick={handleDropdownLinkClick} className='hover:text-coral-pink'>
                                   Dev Day
                              </Link>

                              <Link href="/events/cs-expo" onClick={handleDropdownLinkClick} className='hover:text-coral-pink'>
                                   CS Expo
                              </Link>

                              <Link href="/events/committees" onClick={handleDropdownLinkClick} className='hover:text-coral-pink'>
                                   Committees
                              </Link>
                         </div>
                    )}
               </div>
     
               <div className="relative group">
                    <button onClick={toggleMobileProjectsDropdown} className="flex items-center justify-center cursor-pointer hover:text-coral-pink">
                         Projects
                              <span className="pl-2">
                                   <AiOutlineDown />
                              </span>
                    </button>

                    {showMobileProjectsDropdown && (
                         <div className="relative m-4 flex flex-col text-left font-normal w-max">
                              <Link href="/projects" onClick={handleMobileDropdownLinkClick} className='hover:text-coral-pink'>
                                   Overview
                              </Link>

                              <Link href="/projects/hall-of-fame" onClick={handleDropdownLinkClick} className='hover:text-coral-pink'>
                                   Hall of Fame
                              </Link>

                              <Link href="/projects/collections-of-projects" onClick={handleDropdownLinkClick} className='hover:text-coral-pink'>
                                   Collections of Projects
                              </Link>
                         </div>
                    )}
               </div>

               <Link href="/partners" className="cursor-pointer hover:text-coral-pink">
                    Partners
               </Link>
          </div>
     );
     };

     return (
          <header ref={mobileNavbarRef} className={`w-full fixed z-10 top-0 right-0 left-0 transition-all ${isNavbarAtTop ? 'h-auto' : 'bg-eerie-black'}`}>
              <nav className="w-full mx-auto flex justify-between items-center px-6 py-3 bg-transparent">
                  <Link href="/">
                      <Image
                          src={isNavbarAtTop ? '/cs-expo-logo-black.png' : '/cs-expo-logo-white.png'}
                          alt="logo"
                          width={117}
                          height={85}
                          className="object-contain"
                      />
                  </Link>
  
                  <div className="cursor-pointer ml-auto flex" onClick={toggleMobileMenu}>
                      {isMobile ? (
                          mobileMenuVisible ? <div className='text-coral-pink'><IoClose /></div> : <div className='text-coral-pink'><FaBars /></div>
                      ) : (
                         isNavbarAtTop ? (defaultMenu()) : (
                         mobileMenuVisible ? (
                              <div className='text-coral-pink'><IoClose /></div>) : (
                                   (!mobileMenuVisible && isNavbarAtTop) ? (<> {toggleMobileMenu()} {defaultMenu()} </>) : (
                                   <div className='text-coral-pink'><FaBars /></div>)))
                      )}
                  </div>
              </nav>
  
              {((isMobile && mobileMenuVisible) || (mobileMenuVisible && !isNavbarAtTop)) ? mobileMenu() : null}
          </header>
      );
  };
  
  export default NavBar;