import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { GlassCard } from './GlassCard';

export interface TimelineEvent {
  id: string;
  type: 'work' | 'education';
  period: string;
  title: string;
  organization: string;
  description: string;
}

interface TimelineItemProps {
  event: TimelineEvent;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const isWork = event.type === 'work';

  return (
    <div className="relative pl-8 sm:pl-12 pb-10 last:pb-0 group">
      {/* Connector Line */}
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/10 to-transparent group-last:bottom-auto group-last:h-6"></div>

      {/* Bullet node */}
      <div className="absolute left-1.5 sm:left-3.5 top-1.5 w-5 h-5 rounded-full border-2 border-brand-primary bg-brand-bg flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-primary group-hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      <GlassCard className="!p-5 border border-white/5" hoverable={true}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {isWork ? (
              <Briefcase size={16} className="text-brand-primary" />
            ) : (
              <GraduationCap size={16} className="text-brand-secondary" />
            )}
            <h4 className="text-base font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
              {event.title}
            </h4>
          </div>
          <span className="text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 w-fit">
            {event.period}
          </span>
        </div>

        <p className="text-sm font-semibold text-brand-secondary mb-2">
          {event.organization}
        </p>

        <p className="text-sm text-gray-400 leading-relaxed">
          {event.description}
        </p>
      </GlassCard>
    </div>
  );
};
