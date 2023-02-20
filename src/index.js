import React from 'react';

function App() {
  return (
    <>
      <header>
        <span className="name">Giovanni Goins</span>
        <nav className="links">
          <a className="active" href="about.html">HOME</a>
          <a href="index.html">ABOUT</a>
          <a href="portfolio.html">PORTFOLIO</a>
        </nav>
      </header>
      <main>
        <h2>My main goal is to develope the skills that will make me layoff proof in this economy. My mindset tells me as long as I try there is nothing I can not do.</h2>
        <h3 className="quote">"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." <br />- Thomas Edison</h3>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;


