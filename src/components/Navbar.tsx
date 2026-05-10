import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200 shadow-md">
              <Zap size={18} className="text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-200 group-hover:text-blue-700 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Hire<span className="text-amber-500 group-hover:text-amber-600">Way</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['services', 'success-stories', 'how-it-works', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {id === 'success-stories' ? 'Success Stories' : id === 'how-it-works' ? 'How It Works' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={onGetStarted}
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Get Started Free →
            </button>
          </div>

          <button
            className={`md:hidden transition-colors duration-200 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-down">
          <div className="flex flex-col px-4 py-4 gap-4">
            {['services', 'success-stories', 'how-it-works', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {id === 'success-stories' ? 'Success Stories' : id === 'how-it-works' ? 'How It Works' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button
              onClick={onGetStarted}
              className="mt-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Get Started Free →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
