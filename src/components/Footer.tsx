
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-andalus-navy text-white py-12">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-andalus-gold">Khalid & Siraj</h3>
              <p className="text-gray-300">
                A historical epic bringing the vibrant world of 9th century Al-Andalus to life, 
                showcasing Muslim heroes and their legacy of excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-andalus-gold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#story" className="text-gray-300 hover:text-white transition-colors">Story</a></li>
                <li><a href="#donate" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#progress" className="text-gray-300 hover:text-white transition-colors">Progress</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-andalus-gold">Contact</h4>
              <p className="text-gray-300 mb-2">
                Have questions or want to get involved?
              </p>
              <a 
                href="mailto:contact@khalidandsiraj.com" 
                className="text-andalus-gold hover:underline"
              >
                contact@khalidandsiraj.com
              </a>
              
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Khalid & Siraj Film Production. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
