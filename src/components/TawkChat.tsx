"use client";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useEffect } from "react";

const TawkChat = () => {
  return (
    <>
    <TawkMessengerReact
      propertyId={'67cfce454821b71909b51b41'}
      widgetId={'1im1rrg2a'}
      onLoad={() => {
        console.log('Tawk Messenger loaded');
      }}
      onBeforeLoad={() => {
        console.log('Tawk Messenger loaded');
      }}
      onStatusChange={() => {
        console.log('Tawk Messenger loaded');
      }}
    />
      </> 
  );
};

export default TawkChat;
