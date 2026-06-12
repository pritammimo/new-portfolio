import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, User, GraduationCap, Briefcase, Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { TimelineItem } from '../components/TimelineItem';
import { mockTimelineEvents } from '../data/portfolioData';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const workEvents = mockTimelineEvents.filter(e => e.type === 'work');
  const educationEvents = mockTimelineEvents.filter(e => e.type === 'education');

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Title Header */}
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">About Me</h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
          A look into my engineering journey, professional experience, and what drives me as a developer.
        </p>
      </section>

      {/* Main Bio Card */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-6">
          <GlassCard className="flex flex-col gap-5 p-6 md:p-8" hoverable={false}>
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Who I Am</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Pritam Saha</span>, a Senior Full Stack Engineer based in Kolkata, India, with over 6 years of hands-on experience. I specialize in building scalable web applications, distributed systems, AI-powered platforms, and e-commerce solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              My core tech stack revolves around <span className="text-white font-medium">Next.js, React, Node.js,Microservice,PostgreSQL, Prisma, Kafka, RabbitMQ, and Redis</span>. I have deep experience in microservices architecture and designing event-driven systems that handle real-world scale.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              More recently, I've been diving into <span className="text-white font-medium">Agentic AI, LangChain, RAG pipelines, vector databases, and semantic search</span> — building intelligent systems that automate complex workflows like project requirement analysis, document generation, and task planning.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              I also have experience with interactive 3D product customization platforms using React Three Fiber, combining creative frontend work with robust backend engineering.
            </p>
          </GlassCard>
        </div>

        <div className="md:col-span-1 flex flex-col gap-6">
          <GlassCard className="flex flex-col gap-4" hoverable={false}>
            <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3">Quick Facts</h3>
            <div className="flex flex-col gap-3.5 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-gray-400">Location</span>
                <span className="text-gray-200 font-semibold">Kolkata, India</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-gray-400">Experience</span>
                <span className="text-gray-200 font-semibold">6+ Years</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-gray-400">Current Role</span>
                <span className="text-gray-200 font-semibold">Software Engineer</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-gray-400">Company</span>
                <span className="text-gray-200 font-semibold">Capital Numbers</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <span className="text-gray-400">Languages</span>
                <span className="text-gray-200 font-semibold">EN, HI, BN</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-gray-400">Availability</span>
                <span className="text-brand-secondary font-bold">Open to Offers</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col gap-3 border border-amber-500/20 bg-amber-500/5" hoverable={false}>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              <h3 className="text-base font-bold text-white">Certifications</h3>
            </div>
            <p className="text-sm text-gray-300">
              React Certification — <span className="text-amber-400 font-medium">HackerRank</span>
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4 text-center items-center justify-center p-6 border border-brand-primary/20 bg-brand-primary/5" hoverable={true}>
            <h3 className="text-lg font-bold text-white">Let's build something!</h3>
            <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
              Looking for a full stack engineer for your next project?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-brand-primary px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-200"
            >
              <span>Say Hello</span>
              <ArrowRight size={12} />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Experience and Education Timelines */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Briefcase size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Professional Experience</h2>
          </div>
          <div className="flex flex-col">
            {workEvents.map((event) => (
              <TimelineItem key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Education</h2>
          </div>
          <div className="flex flex-col">
            {educationEvents.map((event) => (
              <TimelineItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
