import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { GlassCard } from '../components/GlassCard';
import { mockProjects, mockSkills } from '../data/portfolioData';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const featuredProjects = mockProjects.slice(0, 2);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-10 md:py-20 relative">
        {/* Sparkle badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold mb-6 animate-float">
          <Sparkles size={12} />
          <span>Open to New Opportunities &amp; Collaborations</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Hi, I'm <span className="text-gradient">Pritam Saha</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-bold">Senior Full Stack Engineer</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
          6+ years of experience designing scalable web applications, distributed systems, AI-powered platforms, and e-commerce solutions.
          Specialized in <span className="text-white font-medium">Next.js, React, Node.js, PostgreSQL, Microservice,kafka</span> and <span className="text-white font-medium">Agentic AI</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold shadow-lg shadow-brand-primary-glow transition-all duration-200 hover:translate-y-[-2px]"
          >
            <span>Explore My Work</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-panel hover:bg-white/5 text-white font-semibold transition-all duration-200 hover:translate-y-[-2px] border border-white/10"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>

      {/* Core Specialties Grid */}
      <section className="flex flex-col gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white mb-2">Core Specialties</h2>
          <p className="text-gray-400 text-sm max-w-lg">
            End-to-end engineering across frontend, backend, AI, and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="flex flex-col gap-4" hoverable={true}>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Code2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">Full Stack Development</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building end-to-end applications with Next.js, React, Node.js, PostgreSQL, Prisma, and TypeScript. From responsive UIs to scalable REST &amp; GraphQL APIs.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4" hoverable={true}>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Terminal size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">Distributed Systems</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Designing microservices with Kafka, RabbitMQ, Redis, and gRPC for event-driven architectures, real-time messaging, and high-throughput data pipelines.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4" hoverable={true}>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Cpu size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">AI &amp; Agentic Systems</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building AI-powered platforms with LangChain, RAG pipelines, vector databases, semantic search, and autonomous agent orchestration.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2">Technical Mastery</h2>
          <p className="text-gray-400 text-sm max-w-lg">
            Technologies and frameworks I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockSkills.map((category) => (
            <GlassCard key={category.title} className="flex flex-col h-full border border-white/5" hoverable={false}>
              <h3 className={`text-base font-extrabold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-5 uppercase tracking-wider`}>
                {category.title}
              </h3>
              <div className="flex flex-col gap-4 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 text-sm max-w-lg">
              A selection of platforms and systems I have designed and built.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-brand-primary hover:text-indigo-300 font-bold transition-colors group text-sm"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
