import React from 'react';
import { Hammer, Monitor, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-rn-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Jij de techniek, <span className="text-rn-blue">wij de pixels.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Als vakman in de bouw of techniek ben je druk met je klussen. Een website? Dat blijft vaak liggen. 
            RNCreative snapt dat. Wij bouwen digitale visitekaartjes die net zo strak staan als jouw leidingwerk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Hammer className="w-10 h-10 text-rn-orange" />,
              title: "Gebouwd voor de Bouw",
              text: "Geen zweverige marketingpraat, maar websites die praktisch zijn en klanten opleveren. Recht door zee."
            },
            {
              icon: <Monitor className="w-10 h-10 text-rn-blue" />,
              title: "Altijd Up-to-Date",
              text: "Technologie verandert snel. Wij zorgen voor updates, beveiliging en back-ups. Jij hebt er geen omkijken naar."
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-rn-purple" />,
              title: "Meer Aanvragen",
              text: "Een professionele site wekt vertrouwen. Overtuig particulieren en aannemers met een strak portfolio."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;