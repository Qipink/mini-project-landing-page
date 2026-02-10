import React from 'react';
import { Instagram, Facebook, Twitter, Github, Dribbble } from 'lucide-react';

const Footer = () => {
  // Data Link Sesuai Gambar Referensi
  const footerLinks = [
    {
      title: "Our Products",
      items: ["The Support Suite", "The Sales Suite", "Support", "Guide"]
    },
    {
      title: "Top Features",
      items: ["Ticketing System", "Knowledge Base", "Community Forums", "Help Desk Software"]
    },
    {
      title: "Resources",
      items: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"]
    },
    {
      title: "Company",
      items: ["About Us", "Press", "Investors", "Events"]
    },
    {
      title: "Favourite Things",
      items: ["For Enterprise", "For Startups", "For Benchmark", "For Small Business"]
    }
  ];

  return (
    // Background Gelap (#23262F) & Teks Putih
    <footer className="bg-[#23262F] pt-16 pb-8 font-saira text-white mt-0">
      <div className="container mx-auto px-6">

        {/* --- BAGIAN ATAS: Logo & Sosmed --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Brand Logo */}
          <h3 className="text-2xl font-bold tracking-wide">Furnishop</h3>

          {/* Social Media Icons (Bulat Transparan) */}
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Github, Dribbble].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-white/80"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* --- DIVIDER LINE --- */}
        <hr className="border-white/10 mb-12" />

        {/* --- BAGIAN TENGAH: Grid 5 Kolom Link --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 mb-20 text-center md:text-left">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-lg font-medium">{section.title}</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors hover:underline underline-offset-4">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- BAGIAN BAWAH: Copyright --- */}
        <div className="text-center pt-8">
          <p className="text-sm text-gray-500">
            © NameBrand 2022 - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;