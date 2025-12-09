import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // 1. We houden de data bij in de state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'waas', // standaardwaarde van de select
    message: ''
  });

  // 2. Hulpfunctie voor Netlify encoding
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // 3. Functie om input wijzigingen op te vangen
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // 4. De echte verzending naar Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", 
        ...formData 
      }),
    })
    .then(() => {
      setStatus('success');
      // Optioneel: Formulier resetten na succes
      setFormData({ name: '', email: '', type: 'waas', message: '' });
    })
    .catch((error) => {
      console.error(error);
      alert("Er ging iets mis bij het versturen.");
      setStatus('idle');
    });
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
      {/* BELANGRIJK: De verborgen input voor Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Naam</label>
          <input 
            type="text" 
            id="name"
            name="name" // Toegevoegd
            value={formData.name} // Toegevoegd
            onChange={handleChange} // Toegevoegd
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
            name="email" // Toegevoegd
            value={formData.email} // Toegevoegd
            onChange={handleChange} // Toegevoegd
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
            name="type" // Toegevoegd
            value={formData.type} // Toegevoegd
            onChange={handleChange} // Toegevoegd
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
          name="message" // Toegevoegd
          value={formData.message} // Toegevoegd
          onChange={handleChange} // Toegevoegd
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