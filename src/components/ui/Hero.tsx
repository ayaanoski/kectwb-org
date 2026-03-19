import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function Hero({ title, breadcrumbs }: HeroProps) {
  return (
    <div className="bg-brand text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-6 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
