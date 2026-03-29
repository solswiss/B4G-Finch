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
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-sm p-7">
                <div>
                    <h2 className="h6">Solution</h2>
                    <ul>
                        <li><Link to="/Product">Product</Link></li>
                        <li><Link to="/Pricing">Pricing</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="h6">Company</h2>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Careers">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="h6">Resources</h2>
                    <ul>
                        <li><Link to="/Help">Help</Link></li>
                        <li><Link to="/Privacy">Privacy</Link></li>
                        <li><Link to="/Terms">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10 bg-none">
            <Email />
            <Links />
            <hr className="mx-7" />
            <div className="p-7 flex flex-col sm:justify-betweenl justify-end items-start gap-2 max-sm:flex-col">
                <div className="w-full flex flex-co">
                    <ul className="flex justify-around flex-wrap gap-4">
                        <li><a href="#"><FaDiscord className="h-7 w-7"></FaDiscord></a></li>
                        <li><a href="#"><FaTwitter className="h-7 w-7"></FaTwitter></a></li>
                        <li><a href="#"><FaInstagram className="h-7 w-7"></FaInstagram></a></li>
                        <li><a href="#"><FaFacebook className="h-7 w-7"></FaFacebook></a></li>
                    </ul>
                </div>
                <p className="caption text-white lg:block">© {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </Section>
    );
};

export default Footer;
