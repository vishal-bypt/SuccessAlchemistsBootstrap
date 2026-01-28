"use client";
import dynamic from "next/dynamic";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";


const EXCLUDED_ROUTES = [
  "/basecamp",
  "/webinar",
];

const TawkChat = () => {
   const pathname = usePathname();
  console.log("Current pathname:", pathname);

   // 🚫 Don't load Tawk on excluded pages
  if (EXCLUDED_ROUTES.includes(pathname)) {
    return null;
  }


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
