import { Link, Outlet, useLocation } from "react-router-dom";
import { Hero } from "@/components/ui/Hero";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "introduction", label: "Introduction", href: "/projects/academy/introduction" },
  { id: "approach", label: "Our Approach", href: "/projects/academy/approach" },
  { id: "curriculum", label: "Curriculum", href: "/projects/academy/curriculum" },
  { id: "facilities", label: "Facilities", href: "/projects/academy/facilities" },
  { id: "admission", label: "Admission", href: "/projects/academy/admission" },
];

export function Academy() {
  const location = useLocation();

  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="The KECT Academy"
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: "The KECT Academy" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Top Nav */}
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar">
                {TABS.map((tab) => {
                  const isActive = location.pathname.includes(tab.href);
                  return (
                    <Link
                      key={tab.id}
                      to={tab.href}
                      className={cn(
                        "px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors border-b lg:border-b-0 lg:border-l-4",
                        isActive
                          ? "text-brand border-brand bg-brand/5"
                          : "text-gray-500 border-transparent hover:text-brand hover:bg-gray-50"
                      )}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for the Outlet
export function AcademyIntro() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Introduction</h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        The Montessori and Primary School Programmeme was started with the establishment of KECT Academy in January, 2019 with 70 children in the age group of 4 to 5 years. This Programmeme seeks children in their formative years, thus enabling us to look at the qualitative development of the child. Class I was started in April, 2019. Two more classes II and III were added in the year 2020-21. Classes IV, V and VI were added from the subsequent academic years. The school presently has 260 students.
      </p>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
        <img src="/kect-logo.png" alt="Academy" className="relative rounded-3xl shadow-xl w-full object-cover h-96 md:h-128" referrerPolicy="no-referrer" />
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">
        The KECT Academy looks after all the developmental needs for the child, including health, hygiene and nutrition, uniforms etc. to name a few. Academic and non-academic growth of a child is the responsibility of the school.
      </p>
    </div>
  );
}

export function AcademyApproach() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Our Approach</h2>
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <p>At The KECT Academy, we pride ourselves on our innovative approach to education. Our goal is to provide our students with a comprehensive education that prepares them for success in the modern world. To achieve this, we utilize a variety of teaching methods and resources to create a dynamic and engaging learning environment.</p>
        <p>One of the key features of our approach is our focus on project-based learning. We believe that hands-on, experiential learning is essential to help students develop the critical thinking and problem-solving skills they need to succeed in their careers. Our teachers work closely with students to design projects that challenge them and encourage them to think creatively.</p>
        <p>Another important aspect of our approach is our use of technology. We believe that technology can be a powerful tool to enhance learning and make it more accessible for all students.</p>
        <p>In addition to our focus on project-based learning and technology, we also emphasize the importance of collaboration and community. We believe that learning is a collaborative process, and we encourage our students to work together and support each other. We also foster a strong sense of community within our school, providing opportunities for students to connect with each other and with the wider community through events and activities.</p>
        <p>Overall, our approach is designed to help our students develop the skills and knowledge they need to succeed in the 21st century. We are committed to providing a high-quality education that prepares our students for the challenges and opportunities of the future.</p>
      </div>
    </div>
  );
}

export function AcademyCurriculum() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Curriculum</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-2">
        The Academy follows Montessori method of education for 4 years+ and 5 years+ to strengthen foundation years. CBSE curriculum are followed for primary and middle school sections.
      </p>
    </div>
  );
}

export function AcademyFacilities() {
  const facilitiesList = [
    "Free English medium education.",
    "1:30 teacher-students ratio along with the services of the care-givers.",
    "Regular orientation of the teachers, staff and parents.",
    "Admission after proper screening and door-to-door survey.",
    "Ambience comparable to any quality school.",
    "Free Nutritional daily snacks for kids.",
    "Periodical Health Screening for all kids and free medicines.",
    "Further Health Care for the kids who require medical intervention.",
    "Parental engagement through interaction and awareness Programmeme.",
    "Free Books, Exercise Books, Uniforms, Shoes and all educational materials."
  ];

  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Facilities</h2>
      <ul className="space-y-4 mb-10">
        {facilitiesList.map((item, i) => (
          <li key={i} className="flex items-start">
            <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 shrink-0"></div>
            <p className="text-gray-600 text-lg">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AcademyAdmission() {
  const admissionSteps = [
    "Notification of admission in the office notice board in January.",
    "Registration and primary screening of the students.",
    "House to house visit of the applicants’ houses by the teachers and caregivers to verify the information given by the applicants.",
    "Interview by the Trustees.",
    "Publication of final list of selected students.",
    "Receipt of requisite documents and admission."
  ];

  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Admission</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        As the Trust is dedicated to provide quality education free of cost to the underprivileged section of the society, the selection process is quite rigorous but easy for the people for seeking admission of their ward in the school. Orphan, children of single parents and children from poor economic background are given preference for admission. The procedure is as follows:
      </p>

      <div className="bg-surface-alt p-6 sm:p-8 rounded-3xl border border-gray-100 mb-10">
        <ul className="space-y-6">
          {admissionSteps.map((item, i) => (
            <li key={i} className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white text-brand font-bold flex items-center justify-center shrink-0 mr-4 shadow-sm border border-gray-100">{i + 1}</div>
              <p className="text-gray-600 text-lg mt-0.5">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
