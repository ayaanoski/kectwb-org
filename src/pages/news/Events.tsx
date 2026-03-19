import { Hero } from "@/components/ui/Hero";
import { CardGrid } from "@/components/ui/CardGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EVENTS = [
  {
    id: "1",
    title: "20-Day Google Classroom Training for Teachers",
    description: "Empowering our educators with modern digital tools to enhance the learning experience.",
    imageUrl: "https://picsum.photos/seed/event1/800/600",
    linkUrl: "#",
    date: "Oct 15, 2025",
  },
  {
    id: "2",
    title: "Parent Orientation on Digital Classes",
    description: "Helping parents understand and support their children's digital education journey.",
    imageUrl: "https://picsum.photos/seed/event2/800/600",
    linkUrl: "#",
    date: "Sep 28, 2025",
  },
  {
    id: "3",
    title: "Tender Notice for Smart Panels",
    description: "Inviting bids for the installation of interactive smart panels in our classrooms.",
    imageUrl: "https://picsum.photos/seed/event3/800/600",
    linkUrl: "#",
    date: "Sep 10, 2025",
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
