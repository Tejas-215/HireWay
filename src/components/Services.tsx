import { FileText, Briefcase, Target, Mic } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Resume That Gets Calls',
    desc: 'ATS-optimized, professionally crafted resumes that make recruiters stop scrolling. We highlight what matters.',
    tag: 'ATS Friendly',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    title: '20–30 Jobs Applied Daily',
    desc: 'We apply to 20–30 matching jobs every single day on LinkedIn & Naukri. You focus on prep, we handle the grind.',
    tag: 'LinkedIn + Naukri',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Target,
    title: 'Profile Optimization',
    desc: 'Your LinkedIn & Naukri profiles transformed to attract top recruiters. SEO-optimized for maximum visibility.',
    tag: 'Recruiter Magnet',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Mic,
    title: 'Mock Interviews + Q&A Bank',
    desc: 'Real mock interviews with feedback + curated question bank covering 60% of actual interview questions asked.',
    tag: '60% Question Match',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">WHAT WE OFFER</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Complete Career Transformation</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We don't just polish your resume — we become your career partner until you hold that offer letter in your hands.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 font-medium">
            <span className="text-blue-600 font-bold">We Are Not Consultants.</span> We{' '}
            <span className="text-blue-600 font-semibold">assist you</span> end-to-end to get your{' '}
            <span className="text-amber-500 font-semibold">offer letter at a top MNC</span>. From your first call to your
            joining day — we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${s.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <s.icon size={22} className={s.color} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className={`inline-flex items-center gap-1 text-xs font-semibold ${s.color}`}>
                <span>✓</span>
                <span>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
