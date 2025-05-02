import React from 'react';
import useTheme from '../hooks/useTheme';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main className={`content ${theme}`}>
      <p>This is the main content of the app.</p>
    </main>
  );
};

export default Content;
