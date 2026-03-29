import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Hamburger from 'hamburger-react';

import { logo } from "../assets";
import Button from "./Button";
import { useState } from "react";

const navigation = [
    {
        id: "0",
        title: "Product",
        url: "/product",
    },
    {
        id: "1",
        title: "Pricing",
        url: "/pricing",
    },
    {
        id: "2",
        title: "About",
        url: "/about",
    },
    {
        id: "3",
        title: "Blog",
        url: "/blog",
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 p-2 md:px-7 md:py-4 border-b border-n-6 md:bg-n-8/90 md:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex w-full justify-between items-center px-6 md:justify-around md:px-7.5 xl:px-10 max-md:py-4">
                <HashLink to="/#hero" className="block w-fit">
                    <img src={logo} width={80} alt="Finch" />
                </HashLink>

                <nav className={`${openNavigation ? "flex" : "hidden"} flex-1 fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 md:static md:flex md:mx-auto md:bg-transparent md:mx-4 md:max-w-[50%]`}>
                    <div className="relative w-full z-2 flex flex-col items-end align-start justify-start ml-auto px-7 md:flex-row md:items-center md:align-center md:justify-around">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.url}
                                onClick={handleClick}
                                className={`block relative text-md text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "md:hidden" : ""} my-2 ${
                                    item.url === pathname.hash ? "z-2 md:text-white" : "md:text-white/50"
                                } md:leading-5 md:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>

                <a className="hidden md:flex" href="#login">
                    Login
                </a>

                <div className="md:hidden"><Hamburger toggled={openNavigation} toggle={toggleNavigation}>
                </Hamburger></div>
            </div>
        </div>
    );
};

export default Header;
