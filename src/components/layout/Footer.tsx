import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Mission (Takes up more space on large screens) */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link to="/" className="inline-block mb-6 bg-white/95 p-3 rounded-2xl shadow-lg transition-transform hover:scale-105">
              <img src="/kect-logo.png" alt="KECT Logo" className="h-[60px] w-auto object-contain" />
            </Link>
            <p className="text-blue-100/80 text-base mb-8 leading-relaxed pr-4">
              The Kolkata Educational and Charitable Trust is dedicated to empowering underprivileged communities through quality education, skill development, and holistic support.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="text-lg font-bold mb-6 text-white">Explore</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
              <li><Link to="/projects/academy" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /> The Academy</Link></li>
              <li><Link to="/news/events" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /> Latest Events</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /> Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-8 lg:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-5 text-sm text-blue-100/80">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="pt-2 leading-relaxed">L-15, West Chowbaga, (Panchanna Gram) Gulshan Colony, Kolkata – 700105.</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+917980840465" className="pt-1 hover:text-white transition-colors">+91 7980840465</a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:Kect.wb@gmail.com" className="pt-1 hover:text-white transition-colors">Kect.wb@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Call to Action Banner inside Footer */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/800/200')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to make a difference?</h4>
            <p className="text-blue-100 text-lg">Join us in our mission to educate and empower.</p>
          </div>
          <div className="relative z-10 flex gap-4 w-full md:w-auto">
            <Link to="/donate" className="flex-1 md:flex-none px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors text-center shadow-lg flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" /> Donate Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100/60 text-center md:text-left gap-4">
          <p>&copy; {new Date().getFullYear()} The Kolkata Educational and Charitable Trust. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Trust Reg No: [PLACEHOLDER]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
