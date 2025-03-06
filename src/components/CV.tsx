import React from 'react';

const CV: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-20 text-center">
            <h1 className="text-4xl font-bold mb-8">CV</h1>
            <div className="max-w-3xl w-full px-4">
                {/* Lista dina utbildningar, jobb och skills här */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold">Utbildning</h2>
                    <p>Exempel: Kandidatexamen i Datavetenskap, XYZ Universitet</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold">Erfarenhet</h2>
                    <p>Exempel: Full-stack utvecklare på ABC Företag</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <p>Java, Spring Boot, React, TypeScript, med flera...</p>
                </div>
                <button className="btn btn-secondary" onClick={() => window.open('/path/to/cv.pdf', '_blank')}>
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default CV;

