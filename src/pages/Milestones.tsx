import { Hero } from "@/components/ui/Hero";
import { Timeline } from "@/components/ui/Timeline";
import { SectionLabel } from "@/components/ui/SectionLabel";

const MILESTONES = [
  {
    id: "1",
    year: "2017",
    title: "Foundation of KECT",
    description: "The Kolkata Educational and Charitable Trust (KECT) was formed with 9 founding Trustees in November, 2017 after a number of discussions regarding establishment of a quality English Medium School in Kolkata and Use of Zakat for Education (UZE). The Trust decided to open a school for weaker sections of the society at Panchanangram, Gulshan Colony, a large slum area in the eastern fringes of Kolkata with a huge population of underprivileged people.",
  },
  {
    id: "2",
    year: "2019",
    title: "Launch of KECT Academy & Coaching Centre",
    description: "The school “KECT Academy” was formally inaugurated on 6th January, 2019 on a space measuring around 1700 sq. ft. purchased by the trust. It started functioning with two Montessori classes for 4 years+ and 5 years+ students. Class I was added from 17th April, 2019. A Coaching Centre for the students of Classes IX to XII was inaugurated at the Beck Bagan unit of KECT on 20th July, 2019. The space there was provided to KECT by a local organization for utilizing it for philanthropic purposes.",
  },
  {
    id: "3",
    year: "2020",
    title: "Online Classes & Expansion",
    description: "The classes for the old students continued uninterruptedly during the pandemic period through online mode since April, 2020. Two new classes II and III from were added in the academic year 2020-21. Classes IV, V and VI were added from the subsequent academic years.",
  },
  {
    id: "4",
    year: "2021",
    title: "Women's Skill Development",
    description: "A skill development Programmeme on basic Tailoring and cutting for the mothers of the students was started from 27th March, 2021. It was organized in collaboration with M/s Ascensive Edu-skill Ltd, an empanelled agency under National Urban Livelihood Mission of the Government of West Bengal. The Trust has started searching for a suitable piece of land in and around Kolkata for establishing a high school in near future and an institute of higher learning later on.",
  },
  {
    id: "5",
    year: "Present",
    title: "Campus Expansion",
    description: "A space of around 1100 square feet was procured recently. It will be used for running three classes till a suitable piece of land is purchased. The Trust is also negotiating to procure another space of around 2000 square feet in the same building. This will help the Trust to run classes upto 10th standard and its other philanthropic activities from the same place.",
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
