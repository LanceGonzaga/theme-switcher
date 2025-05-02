import React from 'react';
import useTheme from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  return <footer className={`footer ${theme}`}>© 2025 Footer</footer>;
};

export default Footer;
