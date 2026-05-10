import { Zap } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold">
                Hire<span className="text-amber-500">Way</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              We connect experienced professionals with their dream jobs. Apply on your behalf, prep you for interviews, and celebrate when you land that offer letter.
            </p>
            <p className="text-xs mt-4">
              <a href="mailto:stakdindia@gmail.com" className="text-blue-400 hover:underline">
                stakdindia@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Services', id: 'services' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Success Stories', id: 'success-stories' },
                { label: 'Contact', id: 'contact' },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">What We Do</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                'Resume Optimization',
                'Daily Job Applications',
                'LinkedIn & Naukri Setup',
                'Mock Interviews',
                'Salary Negotiation',
                'Career Coaching',
              ].map((s) => (
                <li key={s} className="text-gray-500 text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 HireWay. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
