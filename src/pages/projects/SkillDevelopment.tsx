import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SkillDevelopment() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Skill Development"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Skill Development" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform -translate-x-4 translate-y-4"></div>
            <img
              src="/skill.jpg"
              alt="Women learning skills"
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel text="Empowering Women" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Fostering Independence</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                The Kolkata Educational and Charitable Trust, in partnership with M/s Ascensive Edu-skill Ltd, an empanelled agency under National Urban Livelihood Mission of the Government of West Bengal, initiated a skill development Programme on basic tailoring and cutting for the female family members of the students of The KECT Academy. The Programme began on 27th March, 2021, with the objective of empowering women and enabling them to contribute towards the education of their children.
              </p>
              <p>
                The Trust recognizes the importance of women's financial independence and the positive impact it can have on the education and future of their children. By providing basic tailoring and cutting skills to the women, the Programme aims to equip them with the necessary skills to start their own small-scale businesses or work from home, thereby augmenting their household income.
              </p>
              <p>
                The Programme is designed to train women with little or no prior experience in tailoring and cutting. The course is structured to provide practical training on the use of sewing machines, measuring and cutting fabric, stitching and finishing techniques, and basic garment construction. The trainers are experienced professionals with extensive knowledge in tailoring and cutting, who provide hands-on training and guide the participants through the various steps of the course.
              </p>
              <p>
                The Programme has received an overwhelming response from the female family members of the students, with many expressing their appreciation for the opportunity to learn new skills and earn additional income. The academy is committed to continuing its efforts to promote skill development and empowerment of women, and hopes that this initiative will make a meaningful impact on the lives of the families involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
