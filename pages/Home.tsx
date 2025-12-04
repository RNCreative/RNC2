import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import { ContactForm } from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Portfolio />
      
      {/* Quick Contact Section on Home */}
      <section className="py-24 bg-gradient-to-t from-black to-rn-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rn-blue/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Klaar voor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rn-orange to-rn-purple">volgende stap?</span></h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Laat je gegevens achter en wij nemen contact op voor een vrijblijvend adviesgesprek. Geen verkoopverhalen, maar een eerlijk plan.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-rn-blue/10 flex items-center justify-center text-rn-blue font-bold">1</div>
                            <p>Vul het formulier in</p>
                        </div>
                        <div className="w-px h-8 bg-white/10 ml-6"></div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-rn-purple/10 flex items-center justify-center text-rn-purple font-bold">2</div>
                            <p>Wij bellen je binnen 24u</p>
                        </div>
                         <div className="w-px h-8 bg-white/10 ml-6"></div>
                        <div className="flex items-center gap-4 text-white font-bold">
                            <div className="w-12 h-12 rounded-full bg-rn-orange/10 flex items-center justify-center text-rn-orange font-bold">3</div>
                            <p>Start van jouw nieuwe site</p>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;