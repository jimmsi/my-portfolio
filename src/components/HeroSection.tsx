import React from "react";
import heroImg from "../assets/about-me.jpg";

const HeroSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
            <div className="flex-1 flex flex-col justify-center items-start text-left">
                <h1 className="text-5xl font-bold mb-4">
                    <span className="text-primary">Full Stack</span><br />
                    Developer
                </h1>
                <p className="text-lg mb-6">
                    Jag är en passionerad fullstack-utvecklare specialiserad på Java, React och Spring Boot. Jag brinner för att bygga effektiva och användarvänliga applikationer.
                </p>
                <a href="#projects" className="btn btn-primary">Mina Projekt</a>
            </div>
            <div className="mt-8 md:mt-0">
                <img
                    src={heroImg}
                    alt="Jimmy Emanuelsson"
                    className="rounded-2xl shadow-lg max-h-[500px] object-cover"
                />
            </div>
        </section>
    );
};

export default HeroSection;

