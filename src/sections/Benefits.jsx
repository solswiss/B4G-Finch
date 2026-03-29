import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2 } from "../assets";

const benefits = [
    {
        title: "Sign up and Connect LinkedIn",
        text: "AI assisted resume and cover letter generation for speciic roles",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        title: "Download the Chrome extension",
        text: "auto job application filling and personalized job matching",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
];

const Benefits = () => {
    return (
        <Section id="benefits" className="dark:bg-n-8">
            <div className="container relative z-2">
                <Heading className="font-display md:max-w-md lg:max-w-2xl dark:text-white" title="Less Time, Same Quality" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group" key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] dark:bg-n-6/20">
                                <h5 className="h5 mb-5 text-white dark:text-white">{item.title}</h5>
                                <p className="body-2 mb-6 text-white dark:text-white/70">{item.text}</p>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none dark:from-[#4A3A8C] dark:to-[#4A3A8C]/0" />}

                            <div className="absolute inset-0.5 bg-n-8 dark:bg-white/10" style={{ clipPath: "url(#benefits)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />}</div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
