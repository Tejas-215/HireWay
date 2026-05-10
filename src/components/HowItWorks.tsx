const steps = [
  {
    title: 'Free Consultation',
    description: 'We understand your background, experience, goals & guide you on the best path forward. 100% Free — Zero Commitment.',
    color: 'bg-blue-600',
  },
  {
    title: 'Profile Makeover',
    description: 'We revamp your resume, LinkedIn & Naukri profiles to make you irresistible to recruiters.',
    color: 'bg-blue-600',
  },
  {
    title: 'Daily Applications',
    description: 'We apply to 20-30 matching jobs every single day on LinkedIn & Naukri. You focus on prep, we handle the grind.',
    color: 'bg-blue-600',
  },
  {
    title: 'Interview Calls',
    description: 'HR & companies start calling! We prep you with mock interviews & real questions so you nail every round.',
    color: 'bg-emerald-500',
  },
  {
    title: 'Get Placed — Offer Letter!',
    description: 'You crack the interview & land your dream offer letter at a top MNC. Average time: 30-60 days!',
    color: 'bg-amber-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold tracking-[0.35em] uppercase text-blue-600 mb-3">Simple Process</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">How It Works</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg sm:text-xl mb-14">
          Six simple steps from where you are to your dream career with a 50%+ hike.
        </p>

        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 text-left">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step.color} mb-5`}>
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button
            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-xl transition duration-200"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Free Consultation — It&apos;s on Us!
          </button>
        </div>
      </div>
    </section>
  );
}
