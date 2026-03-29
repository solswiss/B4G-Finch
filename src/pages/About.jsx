import {founder1, founder2, founder3} from "../assets";
import Heading from "../components/Heading";
import Section from "../components/Section";

const About = () => {
    return (
        <>
        <Section id="whatIs" className="overflow-hidden place-items-center dark:bg-n-8">
            <Heading tag="What is Finch"/>
                <p className="text-center max-w-4xl text-lg dark:text-white/80">Finch (Easy Apply) is an intentional internship platform built for engineering, computer science, and high-volume student applicants who are tired of mass applying with little return. Instead of helping students submit more applications, Finch optimizes for interview probability — matching them to high-signal roles, tailoring their materials, and integrating structured networking to increase recruiter visibility.
                Finch streamlines the internship application process by combining AI-powered resume tailoring with automated form-filling.</p>
                <br/>
                <p className="text-center max-w-4xl text-lg dark:text-white/80">Users sign up, connect their LinkedIn profile, and the system generates a rich candidate profile. When browsing job postings on major ATS platforms (Greenhouse, Lever, Workday), the Chrome extension detects the application, generates a tailored resume and cover letter in seconds, and autofills the entire form, turning what takes 20–30 minutes into under 60 seconds.</p>
        </Section>
        <Section id="how" className="overflow-hidden place-items-center dark:bg-n-8">
            <Heading tag="How it Started"/>
                <p className="text-center max-w-4xl text-lg dark:text-white/80">Despite sending mass internship applications to many companies, one of the founding members, Carlos, found that 
                    he wasn't recieving any responses. The current system involved putting a lot of time for 
                    little or no return, so he thought of a more efficient way to approach the process. He began building a functional backend that
                    streamlined job and internship applications, and thus Finch was created. </p>
                <br/>
        </Section>
        <Section id="founders" className="overflow-hidden place-items-center dark:bg-n-8">
            <Heading tag="Founding Members"/>
                <div className="flex horizontally-centered gap-4 dark:text-white">
                    <div className="place-items-center">
                        <img width={100} height={300} alt={"Carlos Luna Pena"} src={founder1} />
                        <h2 className="text-lg dark:text-white">Carlos Luna Pena</h2>
                        <h3 className="dark:text-white/80">CTO & Co-founder</h3>
                        <br/>
                        <p className="max-w-md text-center dark:text-white/70">A junior Computer Science student at Texas A&M with a cybersecurity minor and statistics emphasis. Technical Lead for AIPHRODITE (a computer vision project built with FastAPI,
                             PostgreSQL, and Hugging Face) and co-founder of Finch. His work spans Python, LangChain, LaTeX resume generation, LinkedIn scraping, and automated outreach systems. Placed 2nd in the Accenture 
                             Case Competition leading his team's AI operations research.</p>
                    </div>
                    <div className="place-items-center">
                        <img width={100} height={300} alt={"Jose Tirado"} src={founder2} />
                        <h2 className="text-lg dark:text-white">Jose Tirado</h2>
                        <h3 className="dark:text-white/80">CTO & Co-founder</h3>
                        <br/>
                        <p className="max-w-md text-center dark:text-white/70">An Industrial Engineering student at Texas A&M who enjoys solving problems and improving how systems operate. Driven by analytical thinking to create practical, measurable impact.
                             Thrives best when encountering nuanced problems that need outside-the-box solutions — focused on streamlining all people and operations within Finch.</p>
                    </div>
                    <div className="place-items-center">
                        <img width={100} height={300} alt={"Nicanor Garza-Zazueta"} src={founder3} />
                        <h2 className="text-lg dark:text-white">Nicanor Garza-Zazueta</h2>
                        <h3 className="dark:text-white/80">CEO & Co-founder</h3>
                        <br/>
                        <p className="max-w-md text-center dark:text-white/70">An Industrial Distribution Engineering student at Texas A&M focused on building ventures that create measurable, lasting impact. A Meloy Fellows Grant recipient, he operates at the
                             intersection of entrepreneurship, strategy, and execution. Known for assembling high-performing teams and driving growth through relationship-building and disciplined sales leadership.</p>
                    </div>
                </div>
            </Section>
           </> 
        
    );
};

export default About;
