import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Blog</h1>
        <p className="hero-subtitle">
          Dive into our latest articles, tips, and insights on topics that
          matter to you. Join our community of readers and start exploring!
        </p>
        <a href="#latest-posts" className="hero-button">
          Read the Latest Posts
        </a>
      </div>
    </div>
  );
};

export default Hero;
