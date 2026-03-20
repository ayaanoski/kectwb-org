import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart, CreditCard, ShieldCheck, Upload, Download, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

export function Donate() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | "">("");
  const [donationType, setDonationType] = useState<"donate" | "zakat">("donate");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donorDetails, setDonorDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStep(4);
      } else {
        alert("There was a problem submitting your donation details. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountClick = (val: number) => {
    setAmount(val);
  };

  const nextStep = () => {
    if (step === 1 && amount && amount > 0) setStep(2);
    else if (step === 2) {
      if (!donorDetails.firstName || !donorDetails.lastName || !donorDetails.email || !donorDetails.phone) {
        alert("Please fill in all required fields (Name, Email, Phone).");
        return;
      }
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Dreams Take Flight"
        breadcrumbs={[{ label: "Donate" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
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

          <div className="p-6 md:p-12">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
              {/* Step 1 indicator */}
              <div className={`flex flex-col items-center flex-1 ${step >= 1 ? 'text-brand' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors mb-2 ${step >= 1 ? 'border-brand bg-brand/10' : 'border-gray-300'}`}>1</div>
                <span className="text-xs font-semibold hidden sm:block">Amount</span>
              </div>
              <div className="w-16 sm:w-24 h-1 bg-gray-200 rounded-full overflow-hidden mx-2 mt-[-20px] sm:mt-[-28px]">
                <div className={`h-full bg-brand transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
              </div>

              {/* Step 2 indicator */}
              <div className={`flex flex-col items-center flex-1 ${step >= 2 ? 'text-brand' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors mb-2 ${step >= 2 ? 'border-brand bg-brand/10' : 'border-gray-300'}`}>2</div>
                <span className="text-xs font-semibold hidden sm:block">Details</span>
              </div>
              <div className="w-16 sm:w-24 h-1 bg-gray-200 rounded-full overflow-hidden mx-2 mt-[-20px] sm:mt-[-28px]">
                <div className={`h-full bg-brand transition-all duration-500 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
              </div>

              {/* Step 3 indicator */}
              <div className={`flex flex-col items-center flex-1 ${step >= 3 ? 'text-brand' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors mb-2 ${step >= 3 ? 'border-brand bg-brand/10' : 'border-gray-300'}`}>3</div>
                <span className="text-xs font-semibold hidden sm:block">Payment</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} action="https://formsubmit.co/kect.wb@gmail.com" method="POST" encType="multipart/form-data" className="max-w-2xl mx-auto">
              {/* Hidden Setup Fields for FormSubmit */}
              <input type="hidden" name="_subject" value={`New ${donationType === 'zakat' ? 'Zakat' : 'Donation'} Received: ₹${amount}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="Donation_Type" value={donationType === 'zakat' ? 'Zakat' : 'General Donation'} />
              <input type="hidden" name="Amount_INR" value={amount} />

              {/* Preserved Form Fields mapping to state */}
              <input type="hidden" name="First_Name" value={donorDetails.firstName} />
              <input type="hidden" name="Last_Name" value={donorDetails.lastName} />
              <input type="hidden" name="Email_Address" value={donorDetails.email} />
              <input type="hidden" name="Phone_Number" value={donorDetails.phone} />
              <input type="hidden" name="Full_Address" value={donorDetails.address} />

              {/* STEP 1: AMOUNT AND TYPE */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold text-brand mb-6 text-center">Choose Donation Type</h3>

                  <div className="flex gap-4 mb-10">
                    <button
                      type="button"
                      onClick={() => setDonationType("donate")}
                      className={`flex-1 py-4 font-bold rounded-2xl border-2 transition-all duration-300 ${donationType === "donate"
                          ? "bg-brand border-brand text-white shadow-lg scale-105"
                          : "bg-white border-gray-200 text-gray-700 hover:border-brand/50"
                        }`}
                    >
                      General Donation
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("zakat")}
                      className={`flex-1 py-4 font-bold rounded-2xl border-2 transition-all duration-300 ${donationType === "zakat"
                          ? "bg-brand border-brand text-white shadow-lg scale-105"
                          : "bg-white border-gray-200 text-gray-700 hover:border-brand/50"
                        }`}
                    >
                      Zakat
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Select Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[1000, 2500, 5000, 10000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleAmountClick(val)}
                        className={`py-4 px-2 font-bold rounded-xl border-2 transition-all duration-300 ${amount === val
                            ? "bg-accent border-accent text-brand shadow-md scale-[1.03]"
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
                    type="button"
                    onClick={nextStep}
                    disabled={!amount || amount < 100}
                    className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                  >
                    Continue <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}

              {/* STEP 2: DONOR DETAILS */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-2xl font-bold text-brand mb-8">Donor Details</h3>
                  <div className="space-y-6 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input type="text" value={donorDetails.firstName} onChange={e => setDonorDetails({ ...donorDetails, firstName: e.target.value })} required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input type="text" value={donorDetails.lastName} onChange={e => setDonorDetails({ ...donorDetails, lastName: e.target.value })} required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input type="email" value={donorDetails.email} onChange={e => setDonorDetails({ ...donorDetails, email: e.target.value })} required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" value={donorDetails.phone} onChange={e => setDonorDetails({ ...donorDetails, phone: e.target.value })} required className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
                      <textarea value={donorDetails.address} onChange={e => setDonorDetails({ ...donorDetails, address: e.target.value })} rows={3} className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-brand transition-colors"></textarea>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 p-5 rounded-2xl mb-8 flex items-start border border-blue-100">
                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900 leading-relaxed">
                      KECT is a registered NGO. Donations are eligible for tax exemption under section 80G of the Income Tax Act. A receipt will be sent to your email after verification.
                    </p>
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row gap-4">
                    <button type="button" onClick={prevStep} className="w-full sm:w-1/3 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <ArrowLeft className="w-5 h-5 mr-2" /> Back
                    </button>
                    <button type="button" onClick={nextStep} className="w-full sm:w-2/3 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all flex items-center justify-center text-lg shadow-lg">
                      Proceed to Payment <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PAYMENT & PROOF */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-2xl font-bold text-center text-brand mb-2">Make Your Payment</h3>
                  <p className="text-center text-gray-600 mb-8">Amount to pay: <strong className="text-xl text-brand">₹{amount}</strong> for {donationType === 'zakat' ? 'Zakat' : 'General Donation'}</p>

                  <div className="bg-gray-50 border-2 border-gray-100 rounded-[2rem] p-6 md:p-10 mb-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                      {/* Bank Details */}
                      <div className="w-full md:w-1/2 space-y-4 text-sm md:text-base">
                        <h4 className="font-bold text-lg text-brand mb-4 border-b pb-2">Bank Transfer Details</h4>
                        {donationType === 'zakat' ? (
                          <>
                            <div className="flex justify-between"><span className="text-gray-500">Bank</span> <span className="font-bold text-right">IDBI BANK LTD</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C Name</span> <span className="font-bold text-right">KOLKATA EDUCATIONAL AND CHARITABLE TRUST</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C No.</span> <span className="font-bold text-lg text-brand tracking-widest text-right">1526104000089292</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C Type</span> <span className="font-bold text-right">SAVINGS</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">IFSC Code</span> <span className="font-bold text-right">IBKL0001526</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">Branch</span> <span className="font-bold text-right text-xs md:text-sm">SHAKESPEARE SARANI<br />IDBI HOUSE, 44, SHAKESPEARE SARANI</span></div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between"><span className="text-gray-500">Bank</span> <span className="font-bold text-right">HDFC BANK LTD</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C Name</span> <span className="font-bold text-right">KOLKATA EDUCATIONAL AND CHARITABLE TRUST</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C No.</span> <span className="font-bold text-lg text-brand tracking-widest text-right">50200059595139</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">A/C Type</span> <span className="font-bold text-right">CURRENT</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">IFSC Code</span> <span className="font-bold text-right">HDFC0004120</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">Branch</span> <span className="font-bold text-right text-xs md:text-sm">PARK STREET<br />131, PARK STREET, KOLKATA-700016</span></div>
                          </>
                        )}
                      </div>

                      {/* QR Code */}
                      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative group overflow-hidden">
                        <p className="font-bold text-brand mb-4 text-center">Scan to Pay using UPI</p>
                        <img
                          src={donationType === 'zakat' ? '/qr-zakat.png' : '/qr-donate.png'}
                          alt={`${donationType} QR Code`}
                          className="w-48 h-48 object-contain mb-6 mix-blend-multiply"
                        />
                        <a
                          href={donationType === 'zakat' ? '/qr-zakat.png' : '/qr-donate.png'}
                          download={`${donationType}-qr-code.png`}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand/5 text-brand font-bold rounded-full hover:bg-brand hover:text-white transition-all text-sm mb-2"
                        >
                          <Download className="w-4 h-4" /> Download QR
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-brand/20 p-6 md:p-8 rounded-[2rem] mb-10 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand"></div>
                    <label className="block text-xl font-bold text-brand mb-4 flex items-center gap-3">
                      Upload Payment Screenshot <Upload className="w-5 h-5" />
                    </label>
                    <p className="text-sm text-gray-600 mb-6">After completing the transfer, please upload a screenshot of your successful transaction here so we can verify and issue your receipt.</p>

                    <div className="relative">
                      <input
                        type="file"
                        name="attachment"
                        accept="image/*"
                        required
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-3 file:px-6
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-brand/10 file:text-brand
                          hover:file:bg-brand/20 transition-all cursor-pointer border-2 border-dashed border-gray-300 rounded-2xl p-4 md:p-6 bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row gap-4">
                    <button type="button" onClick={prevStep} disabled={isSubmitting} className="w-full sm:w-1/3 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50">
                      <ArrowLeft className="w-5 h-5 mr-2" /> Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-2/3 py-4 bg-accent text-brand font-bold rounded-xl hover:brightness-105 transition-all flex items-center justify-center text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? <Loader2 className="w-5 h-5 shrink-0 mr-2 animate-spin" /> : <CreditCard className="w-5 h-5 shrink-0 mr-2" />}
                      <span>{isSubmitting ? "Submitting..." : "Submit Donation Details"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: SUCCESS */}
              {step === 4 && (
                <div className="animate-in zoom-in-95 duration-500 text-center py-10">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
                    <CheckCircle2 className="w-12 h-12 text-green-500 relative z-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand mb-4">Thank You!</h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    Your {donationType === 'zakat' ? 'Zakat' : 'Donation'} details have been successfully submitted. We will verify your transaction and email confirmation shortly. May your generosity be deeply rewarded.
                  </p>
                  <button type="button" onClick={() => window.location.href = '/'} className="px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand/90 transition-all shadow-lg hover:shadow-xl">
                    Return to Home
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
