import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Section from "./Section";
import { FaDiscord, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Email from "../components/Email";

const socials = [
    {
        title: "Discord",
        icon: FaDiscord,
        url: "#",
    },
    {
        title: "Twitter",
        icon: FaTwitter,
        url: "#",
    },
    {
        title: "Instagram",
        icon: FaInstagram,
        url: "#",
    },
    {
        title: "Facebook",
        icon: FaFacebook,
        url: "#",
    },
];

const Links = () => {
    return (
        <div className="lg:w-[50%]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-sm dark:text-white">
                <div>
                    <h2 className="h6 dark:text-white">Solution</h2>
                    <ul className="dark:text-white/70 dark:hover:text-white">
                        <li><Link to="/Product" className="dark:text-white/70 dark:hover:text-white">Product</Link></li>
                        <li><Link to="/Pricing" className="dark:text-white/70 dark:hover:text-white">Pricing</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="h6 dark:text-white">Company</h2>
                    <ul className="dark:text-white/70 dark:hover:text-white">
                        <li><Link to="/About" className="dark:text-white/70 dark:hover:text-white">About</Link></li>
                        <li><Link to="/Blog" className="dark:text-white/70 dark:hover:text-white">Blog</Link></li>
                        <li><Link to="/Careers" className="dark:text-white/70 dark:hover:text-white">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="h6 dark:text-white">Resources</h2>
                    <ul className="dark:text-white/70 dark:hover:text-white">
                        <li><Link to="/Help" className="dark:text-white/70 dark:hover:text-white">Help</Link></li>
                        <li><Link to="/Privacy" className="dark:text-white/70 dark:hover:text-white">Privacy</Link></li>
                        <li><Link to="/Terms" className="dark:text-white/70 dark:hover:text-white">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <Section className="!py-10 bg-none px-7 dark:bg-none">
            <div className="flex flex-col gap-7 lg:flex-row-reverse justify-between w-full lg:items-center pb-7 lg:gap-0">
                <Email />
                <Links />
            </div>
            <hr className="dark:border-white/10" />
            <div className="py-7 flex flex-col sm:justify-betweenl justify-end items-start gap-2 max-sm:flex-col dark:text-white">
                <div className="w-full flex flex-co">
                    <ul className="flex justify-around flex-wrap gap-4 dark:text-white/70 dark:hover:text-white">
                        <li><a href="#" className="dark:text-white/70 dark:hover:text-white"><FaDiscord className="h-7 w-7"></FaDiscord></a></li>
                        <li><a href="#" className="dark:text-white/70 dark:hover:text-white"><FaTwitter className="h-7 w-7"></FaTwitter></a></li>
                        <li><a href="#" className="dark:text-white/70 dark:hover:text-white"><FaInstagram className="h-7 w-7"></FaInstagram></a></li>
                        <li><a href="#" className="dark:text-white/70 dark:hover:text-white"><FaFacebook className="h-7 w-7"></FaFacebook></a></li>
                    </ul>
                </div>
                <p className="caption text-white lg:block dark:text-white/70">© {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </Section>
    );
};

export default Footer;
