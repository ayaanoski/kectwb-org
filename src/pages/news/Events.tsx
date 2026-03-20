import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/ui/CardGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EVENTS = [
  {
    id: "1",
    title: "Dreams Take Flight: KECT Nurtures the Poor’s Passport to the Future",
    description: "Read our featured narrative covering KECT Academy's mission to provide education to poor and underprivileged students in Kolkata.",
    linkUrl: "https://enewsroom.in/kect-academy-kolkata-education-poor-underprivileged-students/",
    actionText: "Read Article",
    external: true,
  },
  {
    id: "2",
    title: "Workshop and Training for Teachers",
    description: "A one-day workshop and a 20-day training on Google Classroom for the teachers were organized to strengthen digital learning capabilities.",
    linkUrl: "#",
    date: "News & Updates",
  },
  {
    id: "3",
    title: "Skill Development Programme for Mothers",
    description: "A skill development programme on Tailoring and Cutting was inaugurated for the mothers of students, aimed at their social and financial empowerment.",
    linkUrl: "/projects/skill-development",
    actionText: "Learn More",
    date: "Mar 27, 2021",
  },
  {
    id: "4",
    title: "Workshop for Parents",
    description: "A series of workshops were conducted for parents to enable them to better handle and support their children during online classes.",
    linkUrl: "#",
  },
  {
    id: "5",
    title: "Tender Notice for Smart Panels",
    description: "Notice inviting tenders from reputed agencies for the supply, installation, testing and commissioning of smart classes panels and accessories for the educational unit.",
    linkUrl: "/docs/tender.pdf",
    actionText: "Download PDF",
    download: true,
  },
];

export function Events() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Programmes and Events"
        breadcrumbs={[{ label: "News and updates", href: "/news" }, { label: "Events" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Latest Updates" />
          <h2 className="text-4xl md:text-5xl font-bold text-brand mt-6 mb-6">
            Recent Events & Programmes
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest activities, training sessions, and community events aimed at empowering education.
          </p>
        </div>
        <CardGrid items={EVENTS} columns={3} />
      </div>
    </div>
  );
}
