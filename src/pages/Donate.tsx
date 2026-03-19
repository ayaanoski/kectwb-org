import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart, CreditCard, ShieldCheck } from "lucide-react";

export function Donate() {
  const [amount, setAmount] = useState<number | "">("");
  const [step, setStep] = useState(1);

  const handleAmountClick = (val: number) => {
    setAmount(val);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && amount > 0) {
      setStep(2);
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Scaffolding for payment gateway integration
    console.log("Initiating payment for amount:", amount);
    alert("Payment Gateway Integration Placeholder. Amount: ₹" + amount);
    // 1. Validate form data (Name, Email, PAN)
    // 2. Call backend API to create an order (e.g., Razorpay order)
    // 3. Initialize payment gateway UI
    // 4. On success, update database with transaction status
  };

  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Dreams Take Flight"
        breadcrumbs={[{ label: "Donate" }]}
      />
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <SectionLabel text="Make a Difference" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-4">Support Our Cause</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us provide quality education, skill development, and community welfare to those who need it most.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-brand p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/800/400')] opacity-10 mix-blend-overlay"></div>
            <Heart className="w-12 h-12 mx-auto mb-4 text-accent relative z-10" />
            <h2 className="text-3xl font-bold mb-2 relative z-10">Empower a Life Today</h2>
            <p className="text-gray-200 relative z-10">Every donation, big or small, creates a lasting impact.</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              <div className={`flex items-center ${step >= 1 ? 'text-brand' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 1 ? 'border-brand bg-brand/10' : 'border-gray-300'}`}>1</div>
                <span className="ml-3 font-semibold">Amount</span>
              </div>
              <div className="w-20 h-1 bg-gray-200 mx-4 rounded-full overflow-hidden">
                <div className={`h-full bg-brand transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex items-center ${step >= 2 ? 'text-brand' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 2 ? 'border-brand bg-brand/10' : 'border-gray-300'}`}>2</div>
                <span className="ml-3 font-semibold">Details</span>
              </div>
            </div>

            {step === 1 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-brand mb-8 text-center">Select Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[1000, 2500, 5000, 10000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`py-4 px-4 font-bold rounded-xl border-2 transition-all duration-300 ${
                        amount === val
                          ? "bg-accent border-accent text-brand shadow-md scale-105"
                          : "bg-white border-gray-200 text-gray-700 hover:border-accent hover:bg-accent/5"
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Or enter a custom amount (₹)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || "")}
                    placeholder="Enter amount"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand text-lg font-medium transition-colors"
                    min="100"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!amount || amount < 100}
                  className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                >
                  Continue <ArrowRightIcon />
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleDonate} className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="text-2xl font-bold text-brand mb-8">Donor Details</h3>
                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input type="text" required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input type="text" required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Card Number (For 80G Tax Exemption) *</label>
                    <input type="text" required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors uppercase" placeholder="ABCDE1234F" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                    <textarea rows={3} className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-brand transition-colors"></textarea>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-2xl mb-10 flex items-start border border-blue-100">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Your donation is secure. All transactions are encrypted. KECT is a registered NGO and donations are eligible for tax exemption under section 80G of the Income Tax Act.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Donate ₹{amount}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
