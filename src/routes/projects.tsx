import { useState, useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { mockProjects } from '../data/portfolioData';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract categories from mock data
  const categories = useMemo(() => {
    const list = new Set(mockProjects.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter projects based on inputs
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {/* Title Header */}
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Project Catalog</h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
          A showcase of application interfaces, tooling projects, and data dashboards.
        </p>
      </section>

      {/* Interactive Filter Panel */}
      <section className="flex flex-col gap-5 bg-white/5 border border-white/5 rounded-2xl p-5 md:p-6 backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search box */}
          <div className="w-full md:max-w-md relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by name, description, or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all"
            />
          </div>

          {/* Filters count info */}
          <div className="flex items-center gap-2.5 text-xs text-gray-400 ml-auto md:ml-0 font-medium">
            <SlidersHorizontal size={14} />
            <span>Showing {filteredProjects.length} of {mockProjects.length} Projects</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-primary/15 border-brand-primary text-brand-primary shadow-[0_0_8px_rgba(99,102,241,0.25)]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid Display */}
      <section>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4 bg-white/2 rounded-2xl border border-dashed border-white/10">
            <p className="text-gray-400 text-sm">
              No projects match your search criteria.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-indigo-300 font-bold border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Reset Search Filters</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
