import React from "react";
import aboutMeImage from "../assets/about-me.jpg"; // Se till att sökvägen stämmer

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center py-10 px-4">
            <div className="flex justify-center md:w-1/2">
                <img
                    src={aboutMeImage}
                    alt="Jimmy Emanuelsson"
                    className="rounded-2xl shadow-lg object-cover max-h-[400px]"
                />
            </div>
            <div className="flex flex-col justify-center md:w-1/2 px-4 md:px-8">
                <p className="text-xl text-primary font-medium">About Me</p>
                <h1 className="text-4xl font-bold my-4">Jimmy Emanuelsson</h1>
                <h2 className="text-2xl text-gray-500 mb-4">Full-stack Java Developer</h2>
                <p>
                My interest in programming started early and evolved from creating small game projects using simple game engines to pursuing a broad education at YRGO, with a strong foundation in Java and other programming languages. With previous experience as an educator/consultant, founder, and co-owner of a company specializing in migration and diversity, I have developed extensive skills in leadership, education, consulting, and business management. I now look forward to combining my passion for technology with my background in managing and developing teams, focusing strongly on customer relationships.
                </p>
            </div>
        </section>
    );
};

export default About;





