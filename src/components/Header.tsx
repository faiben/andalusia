
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-black/0 py-4">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold text-andalus-gold">Khalid & Siraj</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#story" className="text-white hover:text-andalus-gold transition-colors">Story</a>
          <a href="#donate" className="text-white hover:text-andalus-gold transition-colors">Donate</a>
          <a href="#progress" className="text-white hover:text-andalus-gold transition-colors">Progress</a>
          <a href="#team" className="text-white hover:text-andalus-gold transition-colors">Team</a>
          <a href="#faq" className="text-white hover:text-andalus-gold transition-colors">FAQ</a>
        </nav>
        <Button className="bg-andalus-gold hover:bg-andalus-gold/80 text-black">Donate Now</Button>
      </div>
    </header>
  );
};

export default Header;
