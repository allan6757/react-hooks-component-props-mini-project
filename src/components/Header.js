import React from "react";

// Header component receives 'name' as a prop
function Header({ name }) {
    return (
        <header className="text-center py-8 bg-white shadow-md rounded-lg mb-8">
            {/* Display the blog name in an h1 */}
            <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
                {name}
            </h1>
        </header>
    );
}

export default Header;
