import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-20 text-center">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {/* Projektkort 1 */}
                <div className="card w-80 bg-base-200 shadow-xl">
                    <figure><img src="projekt1.jpg" alt="Projekt 1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Projekt 1</h2>
                        <p>En kort beskrivning av projektet.</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/ditt-användarnamn/projekt1" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Projektkort 2 */}
                <div className="card w-80 bg-base-200 shadow-xl">
                    <figure><img src="projekt2.jpg" alt="Projekt 2" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Projekt 2</h2>
                        <p>En kort beskrivning av projektet.</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/ditt-användarnamn/projekt2" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

