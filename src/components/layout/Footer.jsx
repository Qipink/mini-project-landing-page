import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  // State untuk form newsletter
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [message, setMessage] = useState('');

  // Handler Subscribe
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus(null);
    setMessage('');

    try {
      // POST Request ke API
      await axios.post('https://lumoshive-api-furniture.vercel.app/api/subscribe', {
        email: email
      });

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail(''); // Reset form
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-10 font-saira text-dark mt-20">
      <div className="container mx-auto px-6">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-200 pb-12">
          
          {/* COL 1: Brand & Address */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark">Furniro.</h3>
            <address className="text-[#9F9F9F] text-sm not-italic leading-relaxed">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* COL 2: Links */}
          <div>
            <h4 className="text-[#9F9F9F] font-medium mb-8">Links</h4>
            <ul className="space-y-6 font-medium">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition hover:underline underline-offset-4">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Help */}
          <div>
            <h4 className="text-[#9F9F9F] font-medium mb-8">Help</h4>
            <ul className="space-y-6 font-medium">
              {['Payment Options', 'Returns', 'Privacy Policies'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition hover:underline underline-offset-4">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Newsletter (Dynamic) */}
          <div>
            <h4 className="text-[#9F9F9F] font-medium mb-8">Newsletter</h4>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="flex gap-2 items-end">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="w-full border-b border-black py-1 text-sm outline-none placeholder:text-[#9F9F9F] bg-transparent focus:border-primary transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="border-b border-black font-bold text-sm py-1 uppercase hover:text-primary hover:border-primary transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? '...' : 'SUBSCRIBE'}
                </button>
              </div>

              {/* Feedback Message */}
              {message && (
                <span className={`text-xs font-medium ${status === 'success' ? 'text-primary' : 'text-red-500'}`}>
                  {message}
                </span>
              )}
            </form>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="pt-2">
          <p className="text-sm font-medium text-dark">
            2023 Furniro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;