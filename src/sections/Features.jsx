import Section from "../components/Section";
import Heading from "../components/Heading";
import { recording03, recording01, disc02, chromecast, sliders04 } from "../assets";

const Features = () => {
    return (
        <Section id="features" className="dark:bg-n-8">
            <div className="container dark:text-white">
                <Heading title="Generative AI made for creators." text="OpenAI unlocks the potential of AI-powered applications" />
                <div className="dark:text-white/80">
                Personalized job matching
Autofill job applications
Role-specific resume and cover letter generation
                </div>

            </div>
        </Section>
    );
};

export default Features;
