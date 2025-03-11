"use client";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useEffect } from "react";

const TawkChat = () => {
    useEffect(() => {
        if (window.Tawk_API) {
          window.Tawk_API.onLoad = function () {
            window.Tawk_API.setAttributes({
              color: '#f5a623', // Change button color
              position: 'right-bottom', // Change button position
            });
          };
        }
      }, []);
    
  return (
    <>
    <TawkMessengerReact
      propertyId={'67cfce454821b71909b51b41'}
      widgetId={'1im1rrg2a'}
    />
    {/* <button
        onClick={() => {
          if (window.Tawk_API) {
            window.Tawk_API.toggle(); // Toggle chat visibility on button click
          }
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#ff6600',
          color: 'white',
          borderRadius: '50%',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Chat
      </button>*/}
      </> 
  );
};

export default TawkChat;
