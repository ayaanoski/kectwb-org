import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Pandemic() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="KECT During Pandemic"
        breadcrumbs={[{ label: "News and updates", href: "/news" }, { label: "Pandemic Relief" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <SectionLabel text="Response & Relief" />
          <h2 className="text-3xl md:text-4xl font-bold text-brand mt-6 mb-12">
            KECT during Pandemic
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="leading-relaxed text-xl font-medium text-gray-700 mb-10">
              During the challenging times of the pandemic and lockdowns, KECT stood firmly by the families of the students and took the following steps to mitigate the impact of the situation:
            </p>

            <div className="space-y-8">
              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">1</span>
                  Un-interrupted Education
                </h3>
                <p className="leading-relaxed">
                  The KECT Academy quickly responded to the new situation brought about by the pandemic and the subsequent lockdowns. The academy came up with an innovative solution as early as in April, 2020. The teachers started sending lessons and assignments to students on their parents' WhatsApp accounts and requesting daily submission of completed assignments. This new method was widely accepted by parents and turned out to be very successful with the close monitoring of the process by the Trustees. The KECT Academy was able to start new classes from April 1st, 2021.
                </p>
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">2</span>
                  Workshop for parents
                </h3>
                <p className="leading-relaxed">
                  A number of workshops were conducted for the parents to enable them to handle the online classes.
                </p>
              </div>

              <div className="my-12 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/pandemic.jpg"
                  alt="Pandemic Relief Action"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">3</span>
                  Engaging students through various events
                </h3>
                <p className="leading-relaxed">
                  The students were engaged through various programmes during the lockdown period. The Independence Day 2020 was celebrated online. As the lockdown relaxed, programmes like Children’s Day, Art Exhibition and Republic Day, 2021 were organized. All these functions were organized following the Covid protocols.
                </p>
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">4</span>
                  Relief distribution to parents during lockdown
                </h3>
                <p className="leading-relaxed">
                  Cash relief and Food grains were distributed to those parents who had lost their sources of income during initial phase of strict lockdown. These benefits were also extended to the non-teaching staff of the KECT. The expenditure on this account was pooled among themselves by the Trustees and fund earmarked for the school was not used for this purpose.
                </p>
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">5</span>
                  Introduction of new classes
                </h3>
                <p className="leading-relaxed">
                  Classes II and III were added in 2020-21 and Class IV in the academic year 2021-22.
                </p>
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">6</span>
                  Workshop and Training for teachers
                </h3>
                <p className="leading-relaxed">
                  A one-day’s workshop and a 20-days’ training on Google Classroom for the teachers were organized.
                </p>
              </div>

              <div className="bg-surface-alt rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-brand mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg shadow-sm">7</span>
                  Skill Development programme for the female members of students' families
                </h3>
                <p className="leading-relaxed">
                  A skill development programme on Tailoring and cutting was inaugurated on 27th March, 2021 for the female members of the Students’ families with a view of social and financial empowerment of the women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
