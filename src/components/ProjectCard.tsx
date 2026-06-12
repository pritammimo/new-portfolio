import { ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';
import { GlassCard } from './GlassCard';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string; // for custom gradient background card headers
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassCard className="flex flex-col h-full overflow-hidden !p-0 select-none group">
      {/* Visual Header */}
      <div className={`h-40 w-full bg-gradient-to-r ${project.gradient} relative flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105`}>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span className="text-4xl font-extrabold tracking-widest text-white/20 select-none uppercase">
          {project.title.substring(0, 3)}
        </span>
      </div>

      {/* Body Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category tag */}
        <span className="text-xs font-semibold tracking-wider text-brand-primary uppercase mb-2">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-brand-primary hover:text-indigo-300 transition-colors duration-200 font-medium ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
