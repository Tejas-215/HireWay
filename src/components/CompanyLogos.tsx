import { CheckSquare } from 'lucide-react';

const companies = [
  { name: '7-Eleven', placed: 4, accent: 'from-green-400 to-emerald-500', logo: '7', description: 'Candidates placed' },
  { name: "Lowe's", placed: 1, accent: 'from-blue-500 to-sky-600', logo: 'L', description: 'Candidate placed' },
  { name: 'Licious', placed: 1, accent: 'from-red-500 to-rose-500', logo: 'Li', description: 'Candidate placed' },
  { name: '& More...', placed: null, accent: 'from-amber-400 to-orange-500', logo: '…', description: 'You could be next!' },
];

export default function CompanyLogos() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-blue-600 mb-3">Real Results</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our candidates are working at these companies</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {companies.map((company) => (
            <div key={company.name} className="border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-200 bg-slate-50">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${company.accent} text-white text-lg font-bold mb-5`}>
                {company.logo}
              </div>
              <div className="text-xl font-semibold text-slate-900 mb-2">{company.name}</div>
              <div className="text-sm text-slate-600">{company.description}</div>
              {company.placed !== null && (
                <div className="mt-4 text-sm font-semibold text-slate-700">{company.placed} candidate{company.placed > 1 ? 's' : ''} placed</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
