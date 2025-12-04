import React from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-rn-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-rn-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rn-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-rn-orange animate-pulse"></span>
            <span className="text-sm text-gray-300">Beschikbaar voor nieuwe projecten</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white">Jouw Vakmanschap,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rn-orange via-rn-blue to-rn-purple">
              Ons Meesterwerk.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg">
            Wij bouwen, hosten en onderhouden websites speciaal voor vakmensen in de techniek. Jij de gereedschapskist, wij de pixels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
             <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-rn-orange rounded-lg hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(228,110,66,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rn-orange focus:ring-offset-gray-900"
            >
              Start Nu
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <div className="text-rn-blue font-bold text-2xl">100%</div>
              <div className="text-sm text-gray-500">Service</div>
            </div>
            <div>
              <div className="text-rn-blue font-bold text-2xl">&lt;1wk</div>
              <div className="text-sm text-gray-500">Oplevering</div>
            </div>
            <div>
              <div className="text-rn-blue font-bold text-2xl">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        {/* Hero Visual - Floating Cards */}
        <div className="relative hidden lg:block h-[600px] w-full">
           {/* Abstract Browser Window 1 */}
           <div className="absolute top-10 right-10 w-80 h-96 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 animate-float">
             <div className="flex gap-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-20 bg-rn-orange/20 rounded border border-rn-orange/30 flex items-center justify-center text-rn-orange font-bold">SEO</div>
                    <div className="h-20 bg-rn-blue/20 rounded border border-rn-blue/30 flex items-center justify-center text-rn-blue font-bold">SNEL</div>
                </div>
             </div>
           </div>

            {/* Abstract Browser Window 2 */}
           <div className="absolute bottom-20 left-10 w-72 h-80 bg-gray-800/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_0_40px_rgba(73,50,130,0.5)] p-4 animate-float" style={{animationDelay: '1s'}}>
             <div className="flex items-center justify-between mb-6">
                <div className="text-xs font-mono text-gray-400">code.tsx</div>
                <div className="w-2 h-2 rounded-full bg-rn-blue animate-pulse"></div>
             </div>
             <div className="space-y-2 font-mono text-xs">
                <div className="text-rn-purple"><span className="text-rn-orange">const</span> Success = () ={'>'} {'{'}</div>
                <div className="pl-4 text-gray-300">website.build();</div>
                <div className="pl-4 text-gray-300">clients.increase();</div>
                <div className="pl-4 text-rn-blue">return <span className="text-green-400">"Profit"</span>;</div>
                <div className="text-rn-purple">{'}'}</div>
             </div>
             <div className="mt-8">
               <div className="flex items-center gap-3 text-white">
                 <Shield className="w-8 h-8 text-rn-orange" />
                 <div>
                   <div className="font-bold">Veilig &amp; Online</div>
                   <div className="text-xs text-gray-400">99.9% Uptime</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;