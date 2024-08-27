import React from 'react';

const Achievements = () => {
    const photos = [
        '/images/achievement1.jpg',
        '/images/achievement2.jpg',
    ];

    return (
        <div id="achievements" className="py-20 h-auto flex flex-col items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">Achievements</h2>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
                            >
                                <img
                                    src={photo}
                                    alt={`Achievement ${index + 1}`}
                                    className="w-96 h-72 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
