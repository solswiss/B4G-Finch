import { Link } from "react-router-dom";
import Section from "../components/Section";
import { extensionLink } from "../assets";
import Button from "../components/Button";
import ColBox from "../components/ColBox";

const Product = () => {
    return (
        <>
            <div id="product" className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden px-7 text-center">
                <Section className="">
                    <h1 className="h1 font-display mb-4">The streamlined internship process for students</h1>
                    <h4 className="text-md">Finch makes applications effortless</h4>
                    <Button className="my-12" href={extensionLink} white>Download the Chrome Extension</Button>
                </Section>
                <Section>
                    <h3 className="h3 font-display">How It Works</h3>
                    <ol className="list-decimal list-inside text-left px-7">
                        <li>Sign up, connect LinkedIn, and download the Chrome extension</li>
                        <li>Advanced AI analysis generates a rich candidate profile automatically</li>
                        <li>Browse jobs on major applicant tracking platforms</li>
                        <li>The extension works across Greenhouse, Lever, Workday, and other major platforms to detect opportunities as you browse</li>
                        <li>Tailored resume & cover letter in seconds</li>
                        <li>Autofill the entire application</li>
                        <li>Submit with confidence</li>
                    </ol>
                </Section>

                <Section>
                    <ColBox color="color-1">
                        Advanced AI analysis automatically generates a rich candidate profile with a few magic clicks
                    </ColBox>
                    <ColBox className="container">
                        Extension runs in the background on any major ATS platform to detect opportunities wherever you browse
                    </ColBox>
                    <ColBox className="container">
                        Generates resumes and cover letters tailored to specific job roles in seconds
                    </ColBox>
                    <ColBox className="container">
                        Autofill entire applications, including file uploads, stopping at the final review page so you stay in control
                    </ColBox>
                    <ColBox className="container">
                        What would otherwise take 20–30 minutes now takes under 60 seconds without sacrificing quality
                    </ColBox>
                </Section>
                <Section>
                <p className="mb-7">Say goodbye to mass applying and hello to a smarter, more efficient internship search.</p>

                <div className="flex gap-4 justify-center mb-7">
                    <Link to="/Pricing"><Button white>
                        Get started
                    </Button>
                    </Link>
                    <Link to="/Contact"><Button>
                        Have questions?
                    </Button>
                    </Link>
                </div>
                </Section>

            </div>
        </>
    );
};

export default Product;
