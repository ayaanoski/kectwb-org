import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto py-12">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-brand/10 -translate-x-1/2 rounded-full" />

      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              "relative flex flex-col md:flex-row items-center group",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Dot */}
            <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-md -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />

            {/* Content */}
            <div
              className={cn(
                "w-full md:w-1/2 pl-20 pr-4 md:px-12",
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              )}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-accent/20 text-brand font-bold rounded-full text-sm mb-4 tracking-widest">
                    {event.year}
                  </span>
                  <h3 className="text-2xl font-bold text-brand mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
