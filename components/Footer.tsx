import React from 'react';
import { Rocket, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="bg-rn-orange p-1.5 rounded-lg">
                    <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">
                RN<span className="text-rn-blue">Creative</span>
                </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Wij helpen technische vakmensen groeien met websites die werken. Modern, snel en zonder gedoe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rn-blue hover:text-white transition-colors text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rn-purple hover:text-white transition-colors text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigatie</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-rn-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rn-orange transition-colors">Over Ons</a></li>
              <li><a href="#pricing" className="hover:text-rn-orange transition-colors">Prijzen</a></li>
              <li><a href="#portfolio" className="hover:text-rn-orange transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rn-blue" />
                <a href="mailto:info@rncreative.nl" className="hover:text-white transition-colors">info@rncreative.nl</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rn-blue" />
                <a href="tel:+31612345678" className="hover:text-white transition-colors">+31 6 1234 5678</a>
              </li>
              <li className="mt-4 text-sm text-gray-600">
                KVK: <br />
                Breukelen, Nederland
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} RNCreative. Alle rechten voorbehouden.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;