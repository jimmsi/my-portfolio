import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-20 text-center">
            <h1 className="text-4xl font-bold mb-8">Contact</h1>
            <div className="flex flex-col items-center">
                <p className="mb-2">Email: jimmye@example.com</p>
                <p className="mb-2">Telefon: 070-XXXXXXX</p>
                <img className="mask mask-circle w-40 mt-4" src="dinbild.jpg" alt="Bild på mig" />
            </div>
        </div>
    );
};

export default Contact;

