import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const heroStyle = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    
    .float {
      animation: float 6s ease-in-out infinite;
    }
    
    .glow-pulse {
      animation: glow-pulse 3s ease-in-out infinite;
    }
  `;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center overflow-hidden">
      <style>{heroStyle}</style>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 float" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15 glow-pulse" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10" style={{ animation: 'float 8s ease-in-out infinite' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 hover:border-blue-400/60 transition-all">
              <Star size={14} className="text-yellow-300 fill-yellow-300" />
              <span className="text-blue-100 text-xs font-medium">Many Professionals Placed at Top MNCs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Right Person.{' '}
              <span className="block">Right Time.</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 text-transparent bg-clip-text">Right Place.</span>
            </h1>

            <p className="text-blue-200/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              We apply to 20–30 matching jobs every single day on your behalf. You focus on interview prep — we handle the grind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onGetStarted}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-blue-500/30 border border-blue-300/40 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-xl"
              >
                See How It Works
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {[
                '100% Free consultation — no strings attached',
                'Your information is 100% confidential',
                'Average 50% salary hike for our candidates',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 group">
                  <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-100/80 text-sm group-hover:text-blue-50 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '100+', label: 'Professionals Placed', color: 'from-cyan-500 to-blue-500', textColor: 'text-white' },
              { value: '50%+', label: 'Average Salary Hike', color: 'from-amber-400 to-yellow-500', textColor: 'text-slate-900' },
              { value: '30–90', label: 'Days to Offer Letter', color: 'from-emerald-500 to-teal-500', textColor: 'text-white' },
              { value: '20–30', label: 'Jobs Applied Daily', color: 'from-purple-500 to-pink-500', textColor: 'text-white' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border border-white/10 group cursor-pointer`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`text-3xl font-extrabold mb-1 ${stat.textColor} group-hover:scale-110 transition-transform origin-left`}>{stat.value}</div>
                <div className={`text-sm font-medium ${stat.textColor === 'text-white' ? 'text-white/70 group-hover:text-white' : 'text-slate-900/70 group-hover:text-slate-900'} transition-colors`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
