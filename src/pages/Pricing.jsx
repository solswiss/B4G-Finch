import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { extensionLink } from "../assets";

const primaryPricing = [
    {
        title: "Starter",
        price: "3.99",
        monthly: 15,
        cycle: ["0","10"],
        cost: "0.60",
        margin: 85,
        description: "26.9% of users",
    },
    {
        title: "Core",
        price: "6.99",
        monthly: 40,
        cycle: ["10","50"],
        cost: "1.60",
        margin: 85,
        description: "Largest Segment",
    },
    {
        title: "Pro",
        price: "9.99",
        monthly: 75,
        cycle: ["50","75"],
        cost: "3.00",
        margin: 70,
        description: "17.3% of users",
    },
    {
        title: "Max",
        price: "12.99",
        monthly: 120,
        cycle: ["75","100+"],
        cost: "4.80",
        margin: 63,
        description: "26.9% of users",
    }
];

const secondaryPricing = [
    {
        title: "Trial",
        price: "1.99",
        apps: 5,
        cost: "0.20",
        margin: 90,
    },
    {
        title: "Standard",
        price: "4.99",
        apps: 20,
        cost: "0.80",
        margin: 84,
    },
    {
        title: "Plus",
        price: "8.99",
        apps: 50,
        cost: "2.00",
        margin: 78,
    },
]

const Pricing = () => {
    return (
        <Section id="pricing" className="overflow-hidden">
            <div className="container relative z-2">
                <Heading tag="Take flight with Finch" title="Get the plan best suited for your aspirations." />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {primaryPricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full bg-n-8 border border-n-6 flex flex-col lg:w-auto">
                                <div className="p-6 border-b border-n-6">
                                    <p className="h5">{item.title}</p>
                                    <p className="">{item.description}</p>
                                </div>
                                <div className="p-6">
                                    <p className="h5"><span className="h3 mb-2">${item.price}</span> per month</p>
                                    <Button className="w-full my-4" href={extensionLink} white>
                                        Download for Chrome
                                    </Button>
                                    <ul className="">
                                        <li>{item.monthly} apps/month</li>
                                        <li className="text-sm">{item.cycle[0]}-{item.cycle[1]} apps per cycle</li>
                                        <li className="text-sm">Cost to Finch: ~${item.cost}</li>
                                        <li>~{item.margin}% margin</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;


/**
 * import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { extensionLink } from "../assets";

const primaryPricing = [
    {
        title: "Starter",
        price: "3.99",
        monthly: 15,
        cycle: ["0","10"],
        cost: "0.60",
        margin: 85,
        description: "26.9% of users",
    },
    {
        title: "Core",
        price: "6.99",
        monthly: 40,
        cycle: ["10","50"],
        cost: "1.60",
        margin: 85,
        description: "Largest Segment",
    },
    {
        title: "Pro",
        price: "9.99",
        monthly: 75,
        cycle: ["50","75"],
        cost: "3.00",
        margin: 70,
        description: "17.3% of users",
    },
    {
        title: "Max",
        price: "12.99",
        monthly: 120,
        cycle: ["75","100+"],
        cost: "4.80",
        margin: 63,
        description: "26.9% of users",
    }
];

const secondaryPricing = [
    {
        title: "Trial",
        price: "1.99",
        apps: 5,
        cost: "0.20",
        margin: 90,
    },
    {
        title: "Standard",
        price: "4.99",
        apps: 20,
        cost: "0.80",
        margin: 84,
    },
    {
        title: "Plus",
        price: "8.99",
        apps: 50,
        cost: "2.00",
        margin: 78,
    },
]

const Pricing = () => {
    return (
        <Section id="pricing" className="overflow-hidden">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Get started with OpenAI" title="Pay once, use forever" />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {primaryPricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full bg-n-8 border border-n-6 flex flex-col lg:w-auto">
                                <div className="p-6 border-b border-n-6">
                                    <p className="h5">{item.title}</p>
                                    <p className="">{item.description}</p>
                                </div>
                                <div className="p-6">
                                    <p className="h5"><span className="h3 mb-2">${item.price}</span> per month</p>
                                    <Button className="w-full my-4" href={extensionLink} white>
                                        Download for Chrome
                                    </Button>
                                    <ul className="">
                                        <li>{item.monthly} apps/month</li>
                                        <li className="text-sm">{item.cycle[0]}-{item.cycle[1]} apps per cycle</li>
                                        <li className="text-sm">Cost to Finch: ~${item.cost}</li>
                                        <li>~{item.margin}% margin</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#pricing">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;

 */