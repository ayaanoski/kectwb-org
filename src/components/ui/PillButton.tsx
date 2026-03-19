import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "outline" | "white";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function PillButton({ text, href, variant = "primary", className, onClick, type }: PillButtonProps) {
  const isPrimary = variant === "primary";
  const isWhite = variant === "white";
  
  const baseClasses = cn(
    "inline-flex items-center justify-between px-1 py-1 pl-6 rounded-full text-sm font-semibold transition-all group border",
    isPrimary && "bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark",
    variant === "outline" && "bg-transparent text-navy border-gray-300 hover:border-navy",
    isWhite && "bg-white text-navy border-white hover:bg-gray-50",
    className
  );

  const iconClasses = cn(
    "p-2 rounded-full transition-transform group-hover:rotate-45 ml-4",
    isPrimary && "bg-white text-primary",
    (variant === "outline" || isWhite) && "bg-navy text-white"
  );

  const content = (
    <>
      <span>{text}</span>
      <span className={iconClasses}>
        <ArrowUpRight className="w-4 h-4" />
      </span>
    </>
  );

  if (onClick || type === "submit") {
    return (
      <button type={type || "button"} onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <Link to={href} className={baseClasses}>
      {content}
    </Link>
  );
}
