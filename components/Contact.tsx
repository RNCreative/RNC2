import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white/5 border border-green-500/30 rounded-2xl animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Bericht Ontvangen!</h3>
        <p className="text-gray-400">Bedankt voor je interesse. We nemen binnen 24 uur contact met je op om je project te bespreken.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-rn-orange hover:text-white font-medium underline underline-offset-4"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Naam</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rn-orange focus:ring-1 focus:ring-rn-orange transition-colors placeholder-gray-600"
            placeholder="Jan de Vries"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rn-orange focus:ring-1 focus:ring-rn-orange transition-colors placeholder-gray-600"
            placeholder="jan@bedrijf.nl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2">Ik ben geïnteresseerd in</label>
        <select 
            id="type"
            className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rn-orange focus:ring-1 focus:ring-rn-orange transition-colors [&>option]:bg-gray-900"
        >
            <option value="waas">WaaS Model (Lease)</option>
            <option value="classic">Klassiek Model (Koop)</option>
            <option value="advise">Ik wil advies</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Bericht</label>
        <textarea 
          id="message" 
          rows={4} 
          required
          className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rn-orange focus:ring-1 focus:ring-rn-orange transition-colors placeholder-gray-600"
          placeholder="Vertel ons kort over je bedrijf en wensen..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-gradient-to-r from-rn-orange to-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Versturen...
          </>
        ) : (
          <>
            Verstuur Aanvraag
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};