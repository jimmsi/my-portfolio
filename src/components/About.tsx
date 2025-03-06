import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Jimmy Emanuelsson</h1>
            <h2 className="text-3xl text-gray-600 mb-6">Full-stack Java Developer</h2>
            <p className="max-w-2xl mb-8">
                En kort, slagkraftig beskrivning om vem du är och vad du gör – inspirerad av en modern och minimal design.
            </p>
            <a href="#projects" className="btn btn-primary">Se mina projekt</a>
        </section>
    );
};

export default About;



