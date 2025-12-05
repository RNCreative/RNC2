import React from 'react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-rn-purple/20 filter blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Investeren in <span className="text-rn-orange">Groei</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kwaliteit kost geld, maar levert ook geld op. Kies voor een eenmalige investering of lease je website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Model 1: De Klassieker */}
          <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">De Klassieker</h3>
              <p className="text-gray-400 text-sm h-10">De traditionele aanpak. Je koopt de website en betaalt een klein bedrag voor service.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-gray-500 ml-2">v.a.</span>
                <span className="text-4xl font-bold text-white">€1.200</span>
                <span className="text-gray-500 ml-2">eenmalig</span>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-xl text-rn-blue">+ €49</span>
                <span className="text-gray-500 ml-2">p/m servicecontract</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Modern design (5-7 pagina's)",
                "Volledig mobielvriendelijk",
                "Basis SEO optimalisatie",
                "Contactformulier & WhatsApp knop",
                "Technische updates & Back-ups",
                "Kleine wijzigingen inbegrepen",
                "Eigenaar van de website"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact?plan=classic"
              className="w-full block text-center py-3 px-6 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Kies Klassiek
            </Link>
          </div>

          {/* Model 2: WaaS */}
          <div className="relative bg-gradient-to-b from-gray-900/80 to-rn-purple/20 backdrop-blur-md border border-rn-orange/50 rounded-3xl p-8 shadow-[0_0_40px_rgba(228,110,66,0.15)] flex flex-col transform md:-translate-y-4">
            
            <div className="absolute top-0 right-0 bg-rn-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
              MEEST GEKOZEN
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                WaaS Model
                <span className="bg-rn-blue/20 text-rn-blue text-xs px-2 py-0.5 rounded border border-rn-blue/30">LEASE</span>
              </h3>
              <p className="text-gray-400 text-sm h-10">Website-as-a-Service. Lage instap, volledige ontzorging. Spreid je kosten.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-gray-500 ml-2">v.a.</span>
                <span className="text-4xl font-bold text-white">€139</span>
                <span className="text-gray-500 ml-2">per maand</span>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-xl text-rn-orange">€250</span>
                <span className="text-gray-500 ml-2">opstartkosten</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Alles uit 'De Klassieker'",
                "Geen grote investering vooraf",
                "Hosting & Domeinnaam inbegrepen",
                "Pro-actief onderhoud",
                "Maandelijks opzegbaar na 12 mnd",
                "Mogelijkheid tot afkoop",
                "Beter voor je cashflow"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-rn-orange mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact?plan=waas"
              className="w-full block text-center py-3 px-6 rounded-lg bg-rn-orange text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/50"
            >
              Start WaaS Abonnement
            </Link>
          </div>

        </div>

        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Info className="w-4 h-4 text-rn-blue" />
                <span className="text-sm"> Wij leveren professioneel werk dat zich terugverdient.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;