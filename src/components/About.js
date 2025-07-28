import React from "react";

// Define a default image URL for the 'image' prop
const DEFAULT_IMAGE = "https://via.placeholder.com/215";

// About component receives 'image' (with default) and 'about' as props
function About({ image = DEFAULT_IMAGE, about }) {
    return (
        <aside className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Image element with src from prop (or default) and alt attribute */}
            <img
                src={image}
                alt="blog logo"
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 flex-shrink-0"
            />
            {/* Paragraph element displaying the about text */}
            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                {about}
            </p>
        </aside>
    );
}

export default About;
