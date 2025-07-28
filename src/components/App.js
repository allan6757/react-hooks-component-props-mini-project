import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import blogData from "../data/blog"; // Assuming data/blog.js exports this

function App() {
  // Destructure relevant data from blogData for easier passing
  const { name, image, about, posts } = blogData;

  return (
    <div className="App p-4 max-w-4xl mx-auto bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Pass the blog name to the Header component */}
      <Header name={name} />
      
      {/* Pass the blog image and about text to the About component */}
      <About image={image} about={about} />
      
      {/* Pass the array of posts to the ArticleList component */}
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

