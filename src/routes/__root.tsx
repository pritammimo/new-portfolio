import { useState } from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Menu, X, Mail, Code } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-gray-200">
      {/* Dynamic Animated background nodes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary-glow blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent-glow blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

      {/* Premium Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo / Title */}
          <Link
            to="/"
            className="flex items-center gap-2 group font-display font-extrabold text-xl text-white tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
              <Code size={18} />
            </div>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-brand-primary group-hover:to-brand-accent transition-colors duration-300">
              Pritam Saha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{
                  className: 'bg-white/10 text-white font-medium',
                }}
                inactiveProps={{
                  className: 'text-gray-400 hover:text-white hover:bg-white/5',
                }}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-200"
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Slide Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-lg md:hidden pt-20 flex flex-col px-6 gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                activeProps={{
                  className: 'border-l-4 border-brand-primary pl-4 text-white font-bold text-lg bg-white/5',
                }}
                inactiveProps={{
                  className: 'text-gray-400 hover:text-white pl-4 text-lg',
                }}
                className="py-3 rounded-md transition-all duration-200"
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto mb-10 flex items-center justify-center gap-6 border-t border-white/5 pt-6">
            <a href="https://github.com/pritammimo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/Pritam-saha-b3b65b190" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 md:py-12 z-10">
        <Outlet />
      </main>

      {/* Interactive Footer */}
      <footer className="border-t border-white/5 bg-black/20 py-8 z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              <Code size={14} />
            </div>
            <span className="font-display font-bold text-white text-sm">Pritam Saha</span>
          </div>

          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Pritam Saha.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pritammimo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/Pritam-saha-b3b65b190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:crpritamsaha@gmail.com"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Router DevTools */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
