import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, className = "" }) {
  return (
    <Link to={`/projects/${project.id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="technical text-white bg-black/50 backdrop-blur-sm px-2.5 py-1">
            {project.assetType}
          </span>
          <span className="technical text-white bg-black/50 backdrop-blur-sm px-2.5 py-1">
            {project.area} {project.areaUnit}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="technical text-sage">{project.countryCode}</span>
            <span className="technical text-muted-foreground">— {project.location.split(",")[0]}</span>
          </div>
          <h3 className="font-bold tracking-tight text-base md:text-lg leading-tight">{project.name}</h3>
          {project.units && (
            <p className="technical text-muted-foreground mt-2">
              {project.units} {project.unitsLabel}
            </p>
          )}
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className="text-muted-foreground group-hover:text-sage group-hover:rotate-45 transition-all duration-500 flex-shrink-0 mt-1"
        />
      </div>
    </Link>
  );
}