import { CheckSquare } from 'lucide-react';

const companies = [
  { name: '7-Eleven', placed: 5, accent: 'from-green-400 to-emerald-500', logo: '7-11', description: 'Candidates placed' },
  { name: 'Infosys', placed: 11, accent: 'from-blue-500 to-indigo-600', logo: 'INFY', description: 'Candidates placed' },
  { name: 'TCS', placed: 16, accent: 'from-purple-500 to-violet-600', logo: 'TCS', description: 'Candidates placed' },
  { name: 'Wipro', placed: 20, accent: 'from-orange-400 to-red-500', logo: 'WPRO', description: 'Candidates placed' },
  { name: "Lowe's", placed: 4, accent: 'from-cyan-500 to-teal-600', logo: 'LOE', description: 'Candidate placed' },
  { name: 'Licious', placed: 1, accent: 'from-pink-500 to-rose-600', logo: 'LISH', description: 'Candidate placed' },
  { name: '& More...', placed: null, accent: 'from-amber-400 to-orange-500', logo: '…', description: 'You could be next!' },
];

export default function CompanyLogos() {
  const scrollStyle = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.1), 0 4px 20px rgba(0, 0, 0, 0.08);
      }
      50% {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.2), 0 8px 30px rgba(0, 0, 0, 0.12);
      }
    }
    
    .scroll-container {
      animation: scroll 45s linear infinite;
    }
    
    .scroll-container:hover {
      animation-play-state: paused;
    }
    
    .company-card {
      animation: glow 3s ease-in-out infinite;
      position: relative;
      overflow: hidden;
    }
    
    .company-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    
    .company-card:hover::before {
      opacity: 1;
    }
    
    .company-card:hover {
      transform: translateY(-8px);
      animation: none;
    }
  `;

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-10">
      <style>{scrollStyle}</style>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-blue-600 mb-2">Real Results</p>
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
            Our candidates are working at these companies
          </h2>
          <p className="text-slate-600 mt-1 text-xs">Trusted by industry leaders</p>
        </div>

        <div className="overflow-hidden py-3">
          <div className="scroll-container flex gap-4 w-max">
            {/* First set of companies */}
            {companies.map((company) => (
              <div 
                key={`${company.name}-1`} 
                className={`company-card flex-shrink-0 ${company.name === '& More...' ? 'w-72 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200' : 'w-56 bg-white border border-slate-100'} rounded-xl p-4 transition-all duration-300 cursor-pointer`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${company.accent} rounded-t-xl`}></div>
                
                <div className={`inline-flex items-center justify-center ${company.name === '& More...' ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-gradient-to-br ${company.accent} text-white font-bold mb-3 shadow-sm ${company.logo.length > 2 ? 'text-xs' : 'text-base'}`}>
                  {company.logo}
                </div>
                
                <div className={`${company.name === '& More...' ? 'text-lg' : 'text-base'} font-bold text-slate-900 mb-1`}>{company.name}</div>
                <div className={`text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 ${company.name === '& More...' ? 'text-amber-700' : ''}`}>{company.description}</div>
                
                {company.placed !== null && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="inline-block bg-gradient-to-r from-slate-100 to-slate-50 px-2 py-1 rounded-full">
                      <span className="text-xs font-bold text-slate-900">
                        {company.placed} candidate{company.placed > 1 ? 's' : ''} placed
                      </span>
                    </div>
                  </div>
                )}
                
                {company.placed === null && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className={`${company.name === '& More...' ? 'text-sm font-bold text-amber-600 animate-pulse' : 'text-xs font-semibold text-blue-600'}`}>
                      {company.name === '& More...' ? '🎯 You Could Be Next!' : 'Next could be you! →'}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company) => (
              <div 
                key={`${company.name}-2`} 
                className={`company-card flex-shrink-0 ${company.name === '& More...' ? 'w-72 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200' : 'w-56 bg-white border border-slate-100'} rounded-xl p-4 transition-all duration-300 cursor-pointer`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${company.accent} rounded-t-xl`}></div>
                
                <div className={`inline-flex items-center justify-center ${company.name === '& More...' ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg bg-gradient-to-br ${company.accent} text-white font-bold mb-3 shadow-sm ${company.logo.length > 2 ? 'text-xs' : 'text-base'}`}>
                  {company.logo}
                </div>
                
                <div className={`${company.name === '& More...' ? 'text-lg' : 'text-base'} font-bold text-slate-900 mb-1`}>{company.name}</div>
                <div className={`text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 ${company.name === '& More...' ? 'text-amber-700' : ''}`}>{company.description}</div>
                
                {company.placed !== null && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="inline-block bg-gradient-to-r from-slate-100 to-slate-50 px-2 py-1 rounded-full">
                      <span className="text-xs font-bold text-slate-900">
                        {company.placed} candidate{company.placed > 1 ? 's' : ''} placed
                      </span>
                    </div>
                  </div>
                )}
                
                {company.placed === null && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className={`${company.name === '& More...' ? 'text-sm font-bold text-amber-600 animate-pulse' : 'text-xs font-semibold text-blue-600'}`}>
                      {company.name === '& More...' ? '🎯 You Could Be Next!' : 'Next could be you! →'}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
