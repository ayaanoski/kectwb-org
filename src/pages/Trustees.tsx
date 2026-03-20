import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const TRUSTEES = [
  {
    id: 1,
    name: "Iftekhar Adil",
    role: "Director, Aleezah Leather Fashions LLP",
    bio: "Iftekhar is a seasoned professional with extensive experience in the Leather Goods Manufacturing Industry. He currently holds the position of Director at Aleezah Leather Fashions LLP. In this role, he oversees the production of two highly popular brands, which have gained immense popularity in Europe and the Middle East. He is deeply passionate about social causes and making a positive impact on society. This includes the formation of the Friends of Education Society in 1992 for providing free coaching and financial assistance to poor students of classes 7 to 10. He manages the day-to-day affairs of The KECT Academy.",
    imageUrl: "/trustees/IftekharAdil.jpg",
  },
  {
    id: 2,
    name: "Imtiyaz Adil",
    role: "Banker & Social Worker",
    bio: "A banker by profession with a dynamic career of 16 years in Banking, General Insurance and Customer Relationship. A socially conscientious person whose heart beats for the upliftment of the underprivileged, especially in promoting literacy programme, someone who intrinsically believes that life is beautiful in participation and not in isolation: Participation in the socially uplifting causes, participation in the struggle of others to support them and participation in the creation of opportunities for the needy so that they too can come forward and participate with the mainstream. He manages the accounts of the Kolkata Educational and Charitable Trust.",
    imageUrl: "/trustees/ImtiyazAdil.jpg",
  },
  {
    id: 3,
    name: "Jahir Ahmed",
    role: "Founding Member",
    bio: "Zahir Ahmed Hashmi has been working in Saudi Arabia since 1994. Despite the initial challenges He remains connected to his childhood friends, and together, they have a shared vision of doing something for the economically weaker section of the society. This inspired their friends and elders to contribute as well. Together they established the Kolkata Educational and Charitable Trust, which is committed to providing quality education to children belonging to underprivileged section of the Society. He is also one of the founding members of the Friends of Education Society.",
    imageUrl: "/trustees/JahirAhmed.jpg",
  },
  {
    id: 4,
    name: "Jamshed Alam",
    role: "Philanthropist & Businessman",
    bio: "Jamshed Alam is a well-known philanthropist and businessman in West Bengal's leather industry, with over 40 years of expertise in running successful businesses and social organizations. He brings his sharp business knowledge and acumen to support various non-profit organizations he is associated with. His top priorities have always been making healthcare and education available for all. Because of his strong commitment, he decided to team up with the other trustees to form the Kolkata Educational and Charitable Trust. His dedication and effort to the Trust have been notable and noteworthy.",
    imageUrl: "/trustees/JamshedAlam.jpg",
  },
  {
    id: 5,
    name: "Manzar Jameel",
    role: "Educator & Social Activist",
    bio: "Manzar Jameel, a passionate educator and social activist dedicated to uplifting marginalized communities through education. With a Xaverian background, Manzar has spent decades working towards educational upliftment. Manzar played a key role in establishing Milli Al-Ameen College for Girls in Kolkata, providing access to education for young women. Post 1992, Manzar helped establish Friends of Education Society, working tirelessly to support poor and deserving students and prevent dropouts. Manzar's commitment to social justice is great He played a leading role in the NRC CAA movement. As a Founder Trustee of KECT he remains committed to establish education as a Universal right.",
    imageUrl: "/trustees/ManzarJameel.jpg",
  },
  {
    id: 6,
    name: "Namroz Ahmed",
    role: "Deputy Commissioner of Police",
    bio: "Namroz has served in various branches of Kolkata Police since joining it in 1986. He currently the Deputy Commissioner of Police-2, Central Division. He has been recognized for his distinguished service with numerous awards, including the Prashansa Medal, Indian Police Medal, and President Police Medal. He was also honoured with the Captain Sir Tom Moore Memorial Medal for the Covid-19 Hero Award on behalf of the United Nations of Women Empowerment Coalition. Khan is deeply committed to social causes, particularly the education of poor children. As a founding trustees of the KECT, he plays a significant role in supporting the organization.",
    imageUrl: "/trustees/NamrozAhmed.jpg",
  },
  {
    id: 7,
    name: "Shakil Ahmed",
    role: "Civil Servant",
    bio: "Shakil is a distinguished civil servant with over 30 years of experience in Government sector. Known for his astute administrative skills, he holds a firm belief in assisting the underprivileged. His dedication to social service dates back to his college days. He actively supported numerous organizations focused on providing education to poor students. He co-founded the Friends of Education Society with his friends, aiming to help financially disadvantaged students in completing their studies. Shakil plays a pivotal role in overseeing the academic aspects and planning of the KECT Academy, ensuring that students receive quality education for a brighter future.",
    imageUrl: "/trustees/ShakilAhmed.jpg",
  },
  {
    id: 8,
    name: "Shakil Ahmed Hashmi",
    role: "Director, Ahmed Tannery",
    bio: "Shakil is known for his philanthropic efforts and expertise in manufacturing, exporting, and tanning of leather goods. He is a Director of Ahmed Tannery and Ah tiam Tannery Private Limited. He has always been actively involved in social work. He has been a source of motivation and a hands-on supporter of KECT since its inception. With his vast practical business experience and quick decision-making skills, he has played a vital role in moving the mission of KECT forward. Shakil's strong belief in leaving a legacy after death drives him to support economically weaker students in education.",
    imageUrl: "/trustees/ShakilAhmedHashmi.jpg",
  },
  {
    id: 9,
    name: "Sk. Md. Kalimuddin",
    role: "Former DCP",
    bio: "Kalimuddin strongly believes in “Education is the key to all successes”. Driven by his desire to support underprivileged children in their educational journey, he initiated discussions on “Use of Zakat for Education”. This culminated to the establishment of the KECT with like-minded trustees. Following his graduation and engineering diploma, he joined the Kolkata Police, serving for 35 years and receiving prestigious accolades such as the Prashansa Padak, Indian Police Medal, Nistha Padak, and President Police Medal. After retiring as DCP in 2021, he joined Reliance Jio, where he continues his good work. As a passionate social worker, he was instrumental in formation of a Morning Walkers’ Association to restore the loss glory of Park Circus Maidan.",
    imageUrl: "/trustees/SkMdKalimuddin.jpg",
  }
];

export function Trustees() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Trustees at KECT"
        breadcrumbs={[{ label: "Trustees at KECT" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Our Leadership" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Meet Our Board of Trustees</h2>
          <p className="text-lg text-gray-600">
            KECT is guided by a dedicated board of 9 expert trustees who bring diverse experience and a shared passion for our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
          {TRUSTEES.map((trustee) => (
            <TrusteeCard key={trustee.id} trustee={trustee} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TrusteeCard: React.FC<{ trustee: typeof TRUSTEES[0] }> = ({ trustee }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative overflow-hidden shrink-0">
        <img
          src={trustee.imageUrl}
          alt={trustee.name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 text-center flex flex-col flex-grow items-center">
        <h3 className="text-xl font-bold text-brand mb-2">{trustee.name}</h3>
        <p className="text-accent font-bold text-sm mb-6 uppercase tracking-widest">{trustee.role}</p>
        
        <div 
          className={cn(
            "overflow-hidden transition-all duration-500 text-left w-full", 
            expanded ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
          )}
        >
          <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{trustee.bio}</p>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="mt-auto mx-auto w-12 h-12 shrink-0 rounded-full bg-brand/5 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors border border-transparent hover:shadow-md"
          aria-label={expanded ? "Show less" : "Show more"}
        >
          <ChevronDown className={cn("w-6 h-6 transition-transform duration-500", expanded ? "rotate-180" : "rotate-0")} />
        </button>
      </div>
    </div>
  );
}
