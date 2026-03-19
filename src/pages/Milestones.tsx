import { Hero } from "@/components/ui/Hero";
import { Timeline } from "@/components/ui/Timeline";
import { SectionLabel } from "@/components/ui/SectionLabel";

const MILESTONES = [
  {
    id: "1",
    year: "2010",
    title: "Foundation of KECT",
    description: "The trust was established with the vision of empowering the underprivileged through education.",
  },
  {
    id: "2",
    year: "2012",
    title: "Launch of The KECT Academy",
    description: "Started our first foundational Montessori program for slum-dwelling children.",
  },
  {
    id: "3",
    year: "2015",
    title: "Women's Skill Development",
    description: "Initiated the tailoring program to empower mothers and women in the community.",
  },
  {
    id: "4",
    year: "2018",
    title: "ICSE/ISC Coaching Centre",
    description: "Opened dedicated coaching centers to support students in their board examinations.",
  },
  {
    id: "5",
    year: "2020",
    title: "Pandemic Relief & Healthy Bites",
    description: "Launched extensive community welfare programs including food distribution during the pandemic.",
  },
];

export function Milestones() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Our Milestones"
        breadcrumbs={[{ label: "Milestones" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Our Journey" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">A Decade of Impact</h2>
          <p className="text-lg text-gray-600">
            From our humble beginnings to our current initiatives, explore the key milestones that have shaped our journey of empowering communities through education.
          </p>
        </div>
        <Timeline events={MILESTONES} />
      </div>
    </div>
  );
}
