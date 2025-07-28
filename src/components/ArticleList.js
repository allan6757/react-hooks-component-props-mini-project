import React from "react";
import Article from "./Article"; // Import the Article component

// ArticleList component receives 'posts' array as a prop
function ArticleList({ posts }) {
    return (
        <main className="grid grid-cols-1 gap-6">
            {/* Map over the posts array to render an Article component for each post */}
            {posts.map((post) => (
                <Article
                    key={post.id} // Assign a unique key to each Article component
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutesToRead={post.minutesToRead} // Pass minutesToRead for the bonus feature
                />
            ))}
        </main>
    );
}

export default ArticleList;
