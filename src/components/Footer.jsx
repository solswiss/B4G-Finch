import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Section from "./Section";
import { discordBlack, facebook, instagram, telegram, twitter } from "../assets";
import Email from "../components/Email";

const socials = [
    {
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

const Links = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-sm p-6">
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
        <Section crosses className="!px-0 !py-10 bg-[#f00]">
            <Email />
            <Links />
            <div className="container flex sm:justify-between justify-center items-center gap-2 max-sm:flex-col">
                <div className="w-full flex flex-col justify-end items-start">
                    <ul className="flex justify-around flex-wrap">
                        {socials.map((item, i) => (
                            <a key={i} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10">
                                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                            </a>
                        ))}
                    </ul>
                </div>
                <p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </Section>
    );
};

export default Footer;
