import React from "react";

// Define a default date for the 'date' prop
const DEFAULT_DATE = "January 1, 1970";

// Helper function to calculate minutes to read emoji
function getMinutesToReadEmoji(minutes) {
    if (minutes < 30) {
        // For every 5 minutes (rounded up), display a coffee cup emoji
        const coffeeCups = Math.ceil(minutes / 5);
        return "☕️".repeat(coffeeCups);
    } else {
        // For every 10 minutes (rounded up), display a bento box emoji
        const bentoBoxes = Math.ceil(minutes / 10);
        return "🍱".repeat(bentoBoxes);
    }
}

// Article component receives 'title', 'date' (with default), 'preview', and 'minutesToRead' as props
function Article({ title, date = DEFAULT_DATE, preview, minutesToRead }) {
    const emojiIndicator = minutesToRead ? getMinutesToReadEmoji(minutesToRead) : "";

    return (
        <article className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200 ease-in-out">
            {/* Display the article title in an h3 */}
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {title}
            </h3>
            {/* Display the article date and minutes to read in a small tag */}
            <small className="text-gray-500 text-sm block mb-3">
                {date} {minutesToRead && `• ${emojiIndicator} ${minutesToRead} min read`}
            </small>
            {/* Display the article preview in a p tag */}
            <p className="text-gray-700 leading-relaxed">
                {preview}
            </p>
        </article>
    );
}

export default Article;
