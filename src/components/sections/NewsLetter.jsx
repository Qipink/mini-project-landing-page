import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
    // 1. State Management (Logika Fungsional)
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [message, setMessage] = useState('');

    // 2. Fungsi Handle Subscribe (API POST)
    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setStatus(null);
        setMessage('');

        try {
            await axios.post('https://lumoshive-api-furniture.vercel.app/api/subscribe', {
                email: email
            });

            setStatus('success');
            setMessage('Success! Check your inbox for the discount code.');
            setEmail('');
        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage('Subscription failed. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pt-10 font-saira">
            <div className="w-full mx-auto h-full">
                <div className="relative w-full overflow-hidden bg-[#286F6C] min-h-120 flex items-center">

                    <div className="absolute top-0 left-0 w-full h-full">
                        <img
                            src="/images/newsLetter.jpg"
                            alt="Lamp Background"
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay md:opacity-100 md:mix-blend-normal"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=2000"
                            }}
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#286F6C]/80 to-[#286F6C] md:from-transparent md:via-[#286F6C]/20 md:to-[#286F6C]/90"></div>
                    </div>
                    <div className="relative z-10 w-full md:w-1/2 ml-auto px-8 md:px-20 py-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-[42px] font-bold text-white leading-[1.2] mb-4">
                            Get more discount <br /> Off your order
                        </h2>
                        <p className="text-white/90 text-lg mb-8 font-medium">
                            Join our mailing list
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 py-4 px-6 rounded-lg bg-white text-dark outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-400 shadow-sm transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#23262F] text-white py-4 px-10 rounded-lg font-bold hover:bg-black transition-all shadow-lg whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Shop Now'}
                            </button>
                        </form>

                        {message && (
                            <div className={`mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-semibold animate-fade-in ${status === 'success' ? 'text-white' : 'text-red-200'}`}>
                                {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                <span>{message}</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;