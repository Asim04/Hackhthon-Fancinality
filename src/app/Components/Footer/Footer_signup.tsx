import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-10 px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white">About Us</h3>
          <p className="mt-2 text-sm">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, and professional chauffeur car service in major cities across the world.
          </p>
          <p className="mt-4 text-orange-500">
            Opening Hours:
            <br />
            Mon-Sat: 10:00 - 6:00
            <br />
            Sunday: Closed
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Useful Links</h3>
          <ul className="mt-2 space-y-2">
            {["About", "News", "Plans", "Team", "Menu", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Help?</h3>
          <ul className="mt-2 space-y-2">
            {["FAQ", "Terms & Condition", "Reporting", "Documentation", "Support Policy", "Privacy"].map((helpLink) => (
              <li key={helpLink}>
                <a href="#" className="hover:text-orange-500">
                  {helpLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Recent Post</h3>
          {["Is barefoot good for your body?", "Change your food habits", "Do you like barefoot for your life?"].map((post, idx) => (
            <div key={idx} className="mt-4">
              <a href="#" className="hover:text-orange-500">
                {post}
              </a>
              <p className="text-xs text-gray-500">February 25, 2023</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-500">
        Copyright © 2023 by Ayman. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
