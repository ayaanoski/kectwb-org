import { Hero } from "@/components/ui/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Gallery() {
  return (
    <div className="bg-background min-h-screen">
      <Hero
        title="Gallery"
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Our Impact in Pictures" />
          <h2 className="text-4xl font-bold text-brand mt-6 mb-6">Moments of Joy and Learning</h2>
          <p className="text-lg text-gray-600">
            Explore our gallery to see the smiles, the hard work, and the transformative power of education in action across our various projects.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="break-inside-avoid rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group relative">
              <img
                src={`/gallery/gallery_${i + 1}.jpg`}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">Impact Moment #{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
