import React from 'react';
import EndingPage from '../components/EndingPage';

const About = () => {
  const styles = {
    container: {
     // backgroundColor: '#008080', // Teal background
      color: '#ffffff', // White text
     // padding: '50px',
      textAlign: 'center',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '3em',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.8em',
      maxWidth: '800px',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      <div className='p-10 pt-20 bg-teal-900 '>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our blog! We're passionate writers dedicated to sharing
        insightful content across a variety of topics. From tech trends to lifestyle tips,
        we aim to provide readers with thoughtful articles that inspire, inform, and
        entertain.
      </p>
      <p style={styles.paragraph}>
        Our mission is to create a community of like-minded individuals who enjoy learning 
        and sharing knowledge. Thank you for being a part of our journey!
      </p>
      </div>
      <EndingPage/>
    </div>
  );
};

export default About;

