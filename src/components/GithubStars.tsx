import React from 'react';

const GitHubStars: React.FC = () => {
  return (
    <a href="https://github.com/your_username/your_repo" target="_blank" rel="noopener noreferrer">
      <img src="https://img.shields.io/github/stars/your_username/your_repo?style=social" alt="GitHub stars" />
    </a>
  );
};

export default GitHubStars;