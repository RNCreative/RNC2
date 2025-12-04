import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Installatiebedrijf De Vries",
      category: "Installatietechniek",
      img: "https://images.pexels.com/photos/6474294/pexels-photo-6474294.jpeg",
      description: "Een strakke corporate site met offerte module voor een groot installatiebedrijf."
    },
    {
      title: "Elektro Jansen",
      category: "Elektricien",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      description: "Focus op noodhulp en 24/7 bereikbaarheid. Donkere modus voor 's avonds."
    },
    {
      title: "Loodgieter Service Plus",
      category: "Loodgieter",
      img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg",
      description: "Frisse, betrouwbare uitstraling met directe WhatsApp integratie."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Onze <span className="text-rn-blue">Werken</span></h2>
            <p className="text-gray-400 max-w-xl">
              Bekijk hoe we andere vakmensen online op de kaart hebben gezet.
            </p>
          </div>
          <button className="text-rn-orange hover:text-white font-medium flex items-center gap-2 transition-colors">
            Bekijk alle projecten <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-gray-900 border border-white/10 hover:border-rn-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(116,188,211,0.1)]">
              {/* Browser Bar */}
              <div className="bg-gray-800 border-b border-white/5 px-4 py-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
              </div>
              
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-rn-blue text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;