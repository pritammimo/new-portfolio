import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverable = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 ${
        hoverable ? 'glass-panel-hover cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
