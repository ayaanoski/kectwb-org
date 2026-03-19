import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel text="Get in Touch" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-8">We'd Love to Hear From You</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Whether you have a question about our projects, want to volunteer, or are interested in partnering with us, our team is ready to answer all your questions.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-white rounded-2xl text-brand shadow-sm border border-gray-100 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-brand transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Our Address</h4>
                <p className="text-gray-600 leading-relaxed">L-15, West Chowbaga, (Panchanna Gram)<br />Gulshan Colony, Kolkata – 700105.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-white rounded-2xl text-brand shadow-sm border border-gray-100 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-brand transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Email Us</h4>
                <a href="mailto:Kect.wb@gmail.com" className="text-gray-600 hover:text-brand transition-colors">Kect.wb@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-white rounded-2xl text-brand shadow-sm border border-gray-100 flex items-center justify-center mr-6 group-hover:bg-accent group-hover:text-brand transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Call Us</h4>
                <a href="tel:+917980840465" className="text-gray-600 hover:text-brand transition-colors">+91 7980840465</a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative border border-gray-100">
             <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-100">
                Google Map Integration Placeholder
             </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-brand mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors flex items-center justify-center gap-2 text-lg">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
