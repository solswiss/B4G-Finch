import { curve, file02, heroBackground, homeSmile, loading, plusSquare, robot, searchMd, yourlogo } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";
import { Link } from "react-router-dom";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Turn Applications Into Interviews
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Stop guessing and start applying with strategy. Finch helps you target the right internships, tailor your applications intelligently, and increase your interview rate without spending more time applying</p>
                    <Link to="/Pricing"><Button white>
                        Get started
                    </Button>
                    </Link>
                    <Button href="#features" white>
                        Learn more
                    </Button>
                </div>
            </div>

            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
        </Section>
    );
};

export default Hero;
