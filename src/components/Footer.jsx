import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Team', 'Careers', 'Swiggy Blog', 'Bug Bounty'],
    Contact: ['Help & Support', 'Partner with us', 'Ride with us'],
    Legal: ['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy', 'Cookie Policy'],
    'We deliver to': ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune']
  };

  return (
    <footer className="bg-swiggy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-swiggy-orange mb-4"
            >
              Swiggy
            </motion.h2>
            <p className="text-gray-400 mb-6">
              © 2024 Swiggy Limited
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-swiggy-orange transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="text-gray-400 hover:text-swiggy-orange transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Made with ❤️ for food lovers
            </p>
            <div className="flex items-center space-x-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
                alt="Play Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
