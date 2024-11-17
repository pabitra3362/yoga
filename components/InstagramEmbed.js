'use client'
import React, { useEffect } from 'react';

const InstagramEmbed = ({ postUrl }) => {
  // Use useEffect to ensure the Instagram embed script runs only in the client-side
  useEffect(() => {
    // Dynamically load the Instagram embed script when the component mounts on the client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Once the script is loaded, initialize the Instagram embeds
      script.onload = () => {
        window.instgrm.Embeds.process();
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="instagram-media" data-instgrm-permalink="${postUrl}" data-instgrm-version="13"></blockquote>`,
      }}
    />
  );
};

export default InstagramEmbed;
