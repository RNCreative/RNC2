import { useState, FormEvent, ChangeEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: ""
  });

  // Functie om data te coderen voor Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // Type: ChangeEvent zorgt dat TypeScript weet dat dit een input of textarea is
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", // Moet matchen met index.html
        ...formData 
      }),
    })
      .then(() => alert("Succes! Je bericht is verstuurd."))
      .catch((error) => alert("Oeps, er ging iets mis: " + error));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Verborgen input voor Netlify koppeling */}
      <input type="hidden" name="form-name" value="contact" />

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Naam:</label>
        <input 
          type="text" 
          name="naam" 
          value={formData.naam} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bericht:</label>
        <textarea 
          name="bericht" 
          value={formData.bericht} 
          onChange={handleChange} 
          required 
          rows={5}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Verstuur Aanvraag
      </button>
    </form>
  );
};

export default ContactForm;