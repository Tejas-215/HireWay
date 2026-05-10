import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-white text-xs font-medium">Many Professionals Placed at Top MNCs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Right Person.{' '}
              <span className="block">Right Time.</span>
              <span className="block text-amber-400">Right Place.</span>
            </h1>

            <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              We apply to 20–30 matching jobs every single day on your behalf. You focus on interview prep — we handle the grind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onGetStarted}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur"
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
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '100+', label: 'Professionals Placed', color: 'bg-white' },
              { value: '50%+', label: 'Average Salary Hike', color: 'bg-amber-500' },
              { value: '30–90', label: 'Days to Offer Letter', color: 'bg-green-500' },
              { value: '20–30', label: 'Jobs Applied Daily', color: 'bg-white' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-2xl p-6 shadow-xl ${stat.color === 'bg-white' ? 'text-gray-900' : 'text-white'}`}
              >
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className={`text-sm font-medium ${stat.color === 'bg-white' ? 'text-gray-500' : 'text-white/80'}`}>{stat.label}</div>
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
