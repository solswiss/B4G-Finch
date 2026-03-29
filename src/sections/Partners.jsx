import { aggiex, aggiesCreate, meloy } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";

const collabContent = [
    {
        title: "Seamless Integration",
        text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    { title: "Smart Automation" },
    { title: "Top-notch Security" },
];

const sponsors = [
    {
        title: "AggieX",
        icon: aggiex,
        width: 300,
        height: 60,
    },
    {
        title: "Aggies Create",
        icon: aggiesCreate,
        width: 100,
        height: 100,
    },
    {
        title: "Meloy Entrepreneurship",
        icon: meloy,
        width: 100,
        height: 100,
    },
];

const Partners = () => {
    return (
        <Section id="partners">
            <div className="hidden relative z-10 mt-20 md:block">
                <h5 className="tagline mb-6 text-center text-white/50">Thank you to our sponsors</h5>
                
                <ul className="w-fit max-w-full flex flex-row justify-around items-center gap-7 lg:gap-12 mx-auto">
                    {sponsors.map((sponsor, index) => (
                        <li className="flex items-center flex-0 h-[8.5rem]" key={index}>
                            <img className="" width={sponsor.width} height={sponsor.height} alt={sponsor.title} src={sponsor.icon} />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Partners;
