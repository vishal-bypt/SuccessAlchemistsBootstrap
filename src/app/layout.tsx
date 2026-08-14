import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TawkChat from '../components/TawkChat';
import { ToastContainer } from "react-toastify";
import Script from 'next/script';
import RecaptchaProvider from "@/components/RecaptchaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Success Alchemists",
  description:
    "At Success Alchemists, we believe that our success is tied to yours. If you're a CEO seeking to deliver accelerated growth, augmented value, and a simplified business model, our experienced Scaling Up Coaches are here to help. Scaling up requires a significant shift in management thinking, and while the path may seem simple, it often involves a steep learning curve.",
  // Open Graph Metadata (for social media previews)
  openGraph: {
    title: "Success Alchemists",
    description:
      "At Success Alchemists, we believe that our success is tied to yours. If you're a CEO seeking to deliver accelerated growth, augmented value, and a simplified business model, our experienced Scaling Up Coaches are here to help.",
    url: "https://www.success-alchemists.com", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://www.success-alchemists.com/_next/static/media/main_logo.3d51fd47.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Success Alchemists",
      },
    ],
  },

  // Twitter Metadata (for Twitter previews)
  twitter: {
    card: "summary_large_image",
    site: "@SuccessAlc82336", // Replace with your Twitter username
    title: "Success Alchemists",
    description:
      "At Success Alchemists, we believe that our success is tied to yours. Our Scaling Up Coaches help CEOs achieve growth, value, and simplicity.",
    images: ["https://www.success-alchemists.com/_next/static/media/main_logo.3d51fd47.png"], // Replace with actual image URL
  },

  // Additional SEO Tags
  alternates: {
    canonical: "https://www.success-alchemists.com", // Replace with your actual URL
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true, // Allows search engines to index
    follow: true, // Allows crawling of links
  },
  verification: {
    google: "q3UAAdqxYe-dPQPOYSE49iMzaCw1stampy8h8V9U-s4",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MRFN4CV4');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      </head>
      <body
        style={{ background: "#F5F5F5" }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRFN4CV4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V9F61S5HVC"
          strategy="afterInteractive"
        />

        {/* Hotjar Tracking Code for Success Alchemists */}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6718034,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4
            gtag('config', 'G-V9F61S5HVC');

            // Google Ads
            gtag('config', 'AW-17882487402');
          `}
        </Script>

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1024994675602899');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1024994675602899&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <NavbarMenu />
        <ToastContainer />
        <RecaptchaProvider>
          {children}
        </RecaptchaProvider>
       
        {/* <TawkChat /> */}
        <Footer />
      </body>
    </html>
  );
}
