import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  linkUrl: string;
  date?: string;
  actionText?: string;
  external?: boolean;
  download?: boolean;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export function CardGrid({ items, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid grid-cols-1 gap-8", gridCols[columns])}>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
        >
          {item.imageUrl && (
            <div className="relative h-56 overflow-hidden shrink-0">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {item.date && (
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand shadow-sm">
                  {item.date}
                </div>
              )}
            </div>
          )}
          {!item.imageUrl && item.date && (
            <div className="px-8 pt-8 pb-0">
              <span className="inline-block bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-xs tracking-wide">
                {item.date}
              </span>
            </div>
          )}
          <div className="flex flex-col flex-grow p-8">
            <h3 className="text-2xl font-bold text-brand mb-4 line-clamp-2 leading-tight">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 mb-8 line-clamp-3 flex-grow leading-relaxed">
                {item.description}
              </p>
            )}
            {item.external || item.download ? (
              <a
                href={item.linkUrl}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={item.download ? true : undefined}
                className="inline-flex items-center text-accent font-bold hover:text-brand transition-colors mt-auto uppercase tracking-wide text-sm"
              >
                {item.actionText || "Learn More"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <Link
                to={item.linkUrl}
                className="inline-flex items-center text-accent font-bold hover:text-brand transition-colors mt-auto uppercase tracking-wide text-sm"
              >
                {item.actionText || "Learn More"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
