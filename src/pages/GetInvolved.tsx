import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { HeartHandshake, Building2, Send, Gift, Share2 } from "lucide-react";

export function GetInvolved() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/kect.wb@gmail.com", {
        method: "POST",
        body: formData,
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Get Involved"
        breadcrumbs={[{ label: "Get Involved" }]}
      />
      
      {/* Introduction Block */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <SectionLabel text="Join Our Mission" />
        <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Be a Part of the Change</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          There are several ways for individuals and organizations to get involved with KECT and support its mission of providing quality education to underprivileged children:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* Left Column: Ways to get involved */}
        <div className="xl:col-span-7 space-y-8">
          
          {/* 1. Donate */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand shrink-0">
                <Gift className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand mb-4">1. Donate</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At KECT, we rely on the support of generous donors to help us fulfill our mission of providing quality education to children from economically disadvantaged backgrounds. If you would like to make a difference in the lives of these children, there are two ways you can contribute:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pl-0 md:pl-22">
              <div className="bg-gray-50 p-6 pt-8 rounded-2xl border border-gray-100 relative mt-4 md:mt-0">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-sm">A</div>
                <h4 className="font-bold text-brand mb-3">Infrastructure Focus</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Donate a lump sum amount for infrastructure development and logistics. Your donation will go towards improving our school's facilities and resources, including classroom equipment, library materials, and computer technology. This will ensure that our students have access to the tools they need to succeed academically.</p>
              </div>
              <div className="bg-gray-50 p-6 pt-8 rounded-2xl border border-gray-100 relative mt-4 md:mt-0">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-sm">B</div>
                <h4 className="font-bold text-brand mb-3">Student Sponsorship</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Sponsor the education of one or more students: For just ₹12,000 per year, you can help cover the cost of one student's education, including tuition fees, textbooks, and uniforms. Your contribution will help provide a child with the opportunity to receive a quality education and build a better future.</p>
              </div>
            </div>
            
            <div className="pl-0 md:pl-22">
              <PillButton text="Donate Now" href="/donate" variant="primary" />
            </div>
          </div>

          {/* 2. Volunteer */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand mb-3">2. Volunteer</h3>
              <p className="text-gray-600 leading-relaxed">
                KECT welcomes volunteers who are passionate about education and want to make a positive impact on children's lives. Volunteers can assist with teaching, tutoring, mentoring, organizing events, awareness programmes and skill development programme for the parents and other activities. Interested individuals can contact KECT to learn about current volunteering opportunities.
              </p>
            </div>
          </div>

          {/* 3. Partner */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand shrink-0">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand mb-3">3. Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                KECT is open to partnerships with like-minded organizations and individuals who share its vision of improving access to education for all. Partnerships can take many forms, from joint fundraising campaigns to collaborative projects and initiatives. Interested parties can contact KECT to explore partnership opportunities.
              </p>
            </div>
          </div>

          {/* 4. Spread the word */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand shrink-0">
              <Share2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand mb-3">4. Spread the Word</h3>
              <p className="text-gray-600 leading-relaxed">
                KECT relies on the support of its community to raise awareness about its mission and activities. Individuals can help by sharing KECT's message and information about its programs on social media, in their networks, and through word of mouth.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-brand/5 p-8 rounded-3xl border border-brand/10">
            <p className="text-lg text-brand font-medium leading-relaxed text-center">
              "By getting involved with KECT, individuals and organizations can make a meaningful difference in the lives of underprivileged children and contribute to building a more equitable and just society."
            </p>
          </div>

        </div>

        {/* Right Column: Existing Inquiry Form */}
        <div className="xl:col-span-5 relative">
          <div className="sticky top-24 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-brand mb-8">Inquiry Form</h3>
            {isSuccess ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Thank you!</h4>
                <p className="text-sm font-medium">
                  Your inquiry has been successfully submitted. Our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Get Involved Inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input required name="First_Name" type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input required name="Last_Name" type="text" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">I want to...</label>
                <select name="Reason" className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors text-gray-700">
                  <option>Volunteer my time</option>
                  <option>Discuss a Corporate Partnership</option>
                  <option>Spread the word / Connect</option>
                  <option>Other inquiries</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea name="Message" rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-0 focus:border-brand transition-colors" placeholder="Tell us how you'd like to help..."></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg">
                {isSubmitting ? "Submitting..." : (
                  <>Submit Inquiry <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
