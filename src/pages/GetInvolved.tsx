import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HeartHandshake, Building2, Send } from "lucide-react";

export function GetInvolved() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Get Involved"
        breadcrumbs={[{ label: "Get Involved" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel text="Join Our Mission" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Be a Part of the Change</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Whether you are an educator, a corporate partner, or someone who wants to volunteer their time, there is a place for you at KECT. Together, we can create a brighter future for the underprivileged.
          </p>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mr-6 shrink-0 group-hover:bg-accent group-hover:text-brand transition-colors">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand mb-3">Volunteer With Us</h3>
                <p className="text-gray-600 leading-relaxed">Share your skills and time to help us teach, organize events, or manage operations. Every hour you give makes a tangible difference in a child's life.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mr-6 shrink-0 group-hover:bg-accent group-hover:text-brand transition-colors">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand mb-3">Corporate Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">Partner with us for CSR initiatives and make a lasting impact on the community. We offer transparent reporting and meaningful engagement opportunities for your team.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-brand mb-8">Inquiry Form</h3>
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
                <label className="block text-sm font-bold text-gray-700 mb-2">I want to...</label>
                <select className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors text-gray-700">
                  <option>Volunteer my time</option>
                  <option>Discuss a Corporate Partnership</option>
                  <option>Other inquiries</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="Tell us how you'd like to help..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors flex items-center justify-center gap-2 text-lg">
                Submit Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
