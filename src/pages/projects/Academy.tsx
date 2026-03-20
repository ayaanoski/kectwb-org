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
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The KECT Academy provides foundational education to slum-dwelling populations, focusing on Montessori and Primary levels.
      </p>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
        <img src="/kect-logo.png" alt="Academy" className="relative rounded-3xl shadow-xl w-full object-cover h-96 md:h-128" referrerPolicy="no-referrer" />
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">
        Our goal is to ensure that every child, regardless of their background, has access to quality education that sets them up for future success.
      </p>
    </div>
  );
}

export function AcademyApproach() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Our Approach</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        We employ a holistic approach to education, combining traditional teaching methods with modern pedagogical practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-surface-alt p-6 rounded-2xl border border-gray-100">
          <h4 className="text-xl font-bold text-brand mb-3">Interactive Learning</h4>
          <p className="text-gray-600">Engaging students through hands-on activities and interactive sessions.</p>
        </div>
        <div className="bg-surface-alt p-6 rounded-2xl border border-gray-100">
          <h4 className="text-xl font-bold text-brand mb-3">Personalized Attention</h4>
          <p className="text-gray-600">Maintaining low student-to-teacher ratios to ensure individual attention.</p>
        </div>
      </div>
    </div>
  );
}

export function AcademyCurriculum() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Curriculum</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Our curriculum is designed to be engaging, comprehensive, and aligned with national educational standards.
      </p>
      <ul className="space-y-4 mt-6">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0"></div>
          <p className="text-gray-600 text-lg">Foundational literacy and numeracy skills.</p>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0"></div>
          <p className="text-gray-600 text-lg">Introduction to science and environmental studies.</p>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0"></div>
          <p className="text-gray-600 text-lg">Creative arts, music, and physical education.</p>
        </li>
      </ul>
    </div>
  );
}

export function AcademyFacilities() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Facilities</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        We provide state-of-the-art facilities, including smart classrooms, a well-stocked library, and safe play areas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img src="https://picsum.photos/seed/classroom/400/300" alt="Classroom" className="rounded-2xl shadow-sm w-full object-cover h-96" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/library/400/300" alt="Library" className="rounded-2xl shadow-sm w-full object-cover h-96" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
}

export function AcademyAdmission() {
  return (
    <div className="max-w-none">
      <h2 className="text-3xl font-bold text-brand mb-6">Admission</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Admissions are open to all children from the local community. Please contact our office for more details on the admission process.
      </p>
      <div className="bg-brand/5 p-8 rounded-3xl border border-brand/10 text-center">
        <h3 className="text-2xl font-bold text-brand mb-4">Ready to Apply?</h3>
        <p className="text-gray-600 mb-8">Download the admission form and submit it at our main office.</p>
        <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors shadow-lg">
          Download Admission Form
        </button>
      </div>
    </div>
  );
}
