import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const menu = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    {
        name: "services",
        path: "/services",
        dropdown: [
            { name: "service 1", path: "/service1" },
            { name: "service 2", path: "/service2" },
            { name: "service 3", path: "/service3" }
        ]
    },
    { name: "portfolio", path: "/portfolio" },
    { name: "blog", path: "/blog" },
    { name: "pricing", path: "/pricing" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={`bg-${isScrolled ? 'black' : 'transparent'} text-2xl fixed z-50 w-full transition-colors duration-500 ease-in-out`}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to={'/'} className="w-60">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6">
                                {menu.map(({ name, path, dropdown }, index) => (
                                    <li key={index} onMouseEnter={dropdown ? handleDropdownToggle : undefined} onMouseLeave={dropdown ? handleDropdownToggle : undefined}>
                                        <Link to={path} className="text-xl font-semibold uppercase text-white transition hover:text-gray-200 md:text-lg sm:text-base" > {name} </Link>
                                        {dropdown && isDropdownOpen && (
                                            <ul className="absolute top-full bg-white shadow-md py-2">
                                                {dropdown.map((item, idx) => (
                                                    <li key={idx} className="px-4 py-2">
                                                        <Link to={item.path} className="text-gray-800 hover:text-gray-600">{item.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4 shadow-[0px 0px 0px 0px rgba(0,0,0,0.5)]">
                            <Link to={'/'}
                                className="rounded-3xl bg-[#AD0DD9] px-16 py-2.5 text-xl font-semibold text-white lg:px-12 md:px-10 sm:hidden"
                                href="#"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
