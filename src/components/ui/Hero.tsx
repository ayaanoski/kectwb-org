import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function Hero({ title, breadcrumbs }: HeroProps) {
  return (
    <div className="px-4 md:px-6 lg:px-8 pb-12">
      <div className="relative w-full bg-brand text-white overflow-hidden rounded-[2.5rem] shadow-xl pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Modern Background Decorations */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <nav className="flex items-center space-x-2 text-sm text-blue-100/70 mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold tracking-wide">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
