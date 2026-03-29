import Benefits from "../sections/Benefits";
import Partners from "../sections/Partners";
import Hero from "../sections/Hero";
import Flow from "../sections/Flow";
import Features from "../sections/Features";

const Home = () => {
    return (
        <div>
            <Hero />
            <Partners/>
            <Benefits/>
            {/**<Flow/>
            <Features/>*/}
        </div>
    );
};

export default Home;