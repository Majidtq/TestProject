import React, { useState } from "react";
import { Copy } from "lucide-react";

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M21.05 2.64c-.42-.33-.97-.41-1.47-.2L2.6 9.85c-.42.18-.74.53-.85.96-.11.43-.02.9.25 1.25l3.2 4.23c.29.39.74.61 1.2.61.17 0 .34-.03.5-.1l3.58-1.53 4.92 3.84c.3.23.67.35 1.05.35.18 0 .36-.03.53-.1.6-.22 1.03-.72 1.16-1.34l3.51-15.43c.1-.44-.02-.9-.32-1.23zM9.87 15.85L7.8 16.76l-2.6-3.45 4.67 2.54zm2.93 2.65l-3.52-2.75 7.95-8.6-4.43 9.8z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M20.02 3.74c-1.56-.61-3.23-1.11-4.99-1.4a.17.17 0 00-.18.09c-.21.37-.44.86-.6 1.25a17.85 17.85 0 00-5.5 0c-.18-.4-.4-.9-.62-1.26a.18.18 0 00-.17-.1c-1.76.3-3.43.8-5 1.4a.18.18 0 00-.1.08c-3.16 4.68-4.02 9.21-3.6 13.67a.17.17 0 00.07.12c2.1 1.56 4.13 2.51 6.12 3.14a.17.17 0 00.19-.07c.47-.65.9-1.33 1.29-2.04a.17.17 0 00-.1-.25 12.75 12.75 0 01-1.84-.83.17.17 0 01-.02-.28c.12-.1.25-.2.37-.3a.17.17 0 01.18-.02c3.82 1.75 7.94 1.75 11.74 0a.17.17 0 01.18.02c.13.1.26.2.38.3a.17.17 0 01-.03.28c-.6.36-1.2.63-1.84.84a.17.17 0 00-.1.24c.4.7.82 1.4 1.29 2.05a.17.17 0 00.18.07c2-.63 4.04-1.58 6.13-3.14a.17.17 0 00.07-.12c.5-5-.4-9.52-3.62-13.67a.18.18 0 00-.1-.08zm-12.3 9.52c-.93 0-1.68-.9-1.68-2.01s.74-2.02 1.68-2.02c.94 0 1.69.9 1.69 2.02s-.75 2-1.69 2zm8.54 0c-.93 0-1.68-.9-1.68-2.01s.74-2.02 1.68-2.02c.94 0 1.68.9 1.68 2.02s-.75 2-1.68 2z" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234...ABCD"; // Example contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Section */}
      <div
        className="bg-cover bg-center bg-fixed relative overflow-hidden"
        style={{
          backgroundImage: `url('/FINAL.jpg')`,
          backgroundBlendMode: "overlay",
          height: "calc(100vh - 40px)", // Full screen minus ticker height
        }}
      >
        {/* Header */}
        <header className="p-6">
          <h1
            className="text-6xl font-extrabold text-yellow-400 tracking-wider transform hover:scale-105 transition-transform"
            style={{ textShadow: "2px 2px 0 #ff4444, -2px -2px 0 #4444ff" }}
          >
            BULLINATOR
          </h1>
        </header>

        {/* Fair Launch and Community Driven Tags */}
        <div className="absolute bottom-16 left-4 space-y-3">
          <div className="comic-box text-white scale-3 origin-bottom-left">
            100% FAIR LAUNCH
          </div>
          <div className="comic-box green text-white scale-3 origin-bottom-left">
            100% COMMUNITY DRIVEN
          </div>
        </div>

        {/* Copy CA Button */}
        <div className="absolute bottom-24 right-4">
          <button
            onClick={copyToClipboard}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Copy size={20} />
            {copied ? "Copied!" : "Copy CA"}
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-8">
          <a
            href="#"
            className="text-white hover:text-yellow-400 transform hover:scale-125 transition-all"
          >
            <XIcon />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 transform hover:scale-125 transition-all"
          >
            <TelegramIcon />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 transform hover:scale-125 transition-all"
          >
            <DiscordIcon />
          </a>
        </div>
      </div>

      {/* News Ticker */}
      <div className="w-full bg-black  py-3 overflow-hidden absolute bottom-0 left-0">
        <div className="ticker-wrap">
          <div className="ticker">
            <p className="text-yellow-400 font-bold whitespace-nowrap">
              SATOSHI SECRET WEAPON LANDED FROM THE FUTURE, RUMORS THAT BULL
              MARKET IS SAVED
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              BEAR POPULATION RAPIDLY DECREASING AS UNKNOWN BULL IS RELEASED
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              MASSIVE GREEN CANDLES SIGHTED FROM SPACE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </div>

      {/* Independent Feature Section */}
      <section
        className="bg-yellow-500 py-12 px-4"
        style={{
          backgroundColor: "rgba(236, 176, 9, 0.7)",
          backgroundBlendMode: "overlay",
          height: "calc(100vh - 40px)", // Full screen minus ticker height
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-black uppercase tracking-wider">
          Ponke Utilities
        </h2>
        <p className="text-center text-black text-lg mb-12">
          Seamlessly integrated and community powered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-yellow-300 text-black p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ponke Swap</h3>
              <p>
                PonkeSwap is the next evolution for the Ponke community on
                Solana. A decentralized exchange (DEX) that brings together fun,
                rewards, and exclusive perks for Ponke holders.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-300 text-black p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Robust Integrations</h3>
              <p>
                Ponke has established integrations with top exchanges, wallets,
                and services in the crypto space, ensuring seamless
                accessibility and utility for users across various platforms.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-300 text-black p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Community-Driven Support
              </h3>
              <p>
                Ponke thrives on strong community backing, with continuous
                support from both crypto enthusiasts and leading platforms,
                driving its adoption and utility in the wider crypto space.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-300 text-black p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Expanding Ecosystem</h3>
              <p>
                Ponke’s ecosystem continues to grow with partnerships across
                CEXs, DEXs, and even travel platforms, enabling users to
                leverage Ponke for trading, asset management, and global travel
                bookings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
