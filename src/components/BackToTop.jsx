import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button 
      onClick={scrollToTop} 
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '10px 15px',
        fontSize: '20px',
        background: '#20232a',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: visible ? 'inline' : 'none',
        zIndex: 999,
      }}
    >
      ⬆
    </button>
  );
};

export default BackToTop;
