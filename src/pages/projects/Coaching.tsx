import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Coaching() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="The KECT Coaching Centre"
        breadcrumbs={[{ label: "Projects", href: "/projects/academy" }, { label: "Coaching Centre" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Academic Excellence" />
            <h2 className="text-4xl font-bold text-brand mt-6 mb-6">ICSE/ISC Coaching</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                On July 20, 2019, a Coaching Centre for ICSE and ISC students was inaugurated at its Beckbagan unit by the Trust. With the aim of empowering students from economically poor backgrounds, the Trust later joined hands with the West Bengal Urdu Academy to hold coaching classes for students in classes VIII to X from the nearby Urdu medium schools. The initiative was launched with the purpose of providing quality education to students and helping them achieve their academic goals.
              </p>
              <p>
                Over the years, the coaching Centre has facilitated the learning process of students by providing them with a conducive learning environment and equipped them with the necessary resources for their success. With two batches of students who have already appeared in Board examinations, the coaching Centre has established its excellence in the field of education.
              </p>
              <p>
                The Trust has made it a priority to ensure that every student has access to quality education and has a fair chance to succeed. The Centre's efforts have not only aided students in achieving their academic aspirations but have also contributed to the betterment of the community as a whole. The Trust's collaboration with the West Bengal Urdu Academy is an excellent example of how institutions can work together to create a brighter future for the youth.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/coaching.jpg" 
              alt="Students studying" 
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
