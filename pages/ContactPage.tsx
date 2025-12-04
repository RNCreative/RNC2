import React from 'react';
import { ContactForm } from '../components/Contact';
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-rn-dark relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rn-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rn-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Neem <span className="text-rn-orange">Contact</span> Op</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Heb je een vraag over onze pakketten of wil je direct starten? Wij staan klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
              <div className="space-y-6">
                <a href="tel:+31612345678" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-rn-orange/10 flex items-center justify-center text-rn-orange group-hover:bg-rn-orange group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Bel ons direct</div>
                    <div className="text-lg font-bold group-hover:text-rn-orange transition-colors">+31 6 1234 5678</div>
                  </div>
                </a>

                <a href="mailto:info@rncreative.nl" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-rn-blue/10 flex items-center justify-center text-rn-blue group-hover:bg-rn-blue group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Stuur een mail</div>
                    <div className="text-lg font-bold group-hover:text-rn-blue transition-colors">info@rncreative.nl</div>
                  </div>
                </a>

                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rn-purple/10 flex items-center justify-center text-rn-purple">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Locatie</div>
                    <div className="text-lg font-bold">Eindhoven, NL</div>
                  </div>
                </div>

                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Bereikbaarheid</div>
                    <div className="text-lg font-bold">Ma-Vr: 09:00 - 18:00</div>
                  </div>
                </div>
              </div>

               <div className="mt-8 pt-8 border-t border-white/10">
                 <a 
                   href="https://wa.me/31612345678" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-green-900/20"
                 >
                   <MessageSquare className="w-5 h-5" />
                   Stuur een WhatsApp
                 </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;