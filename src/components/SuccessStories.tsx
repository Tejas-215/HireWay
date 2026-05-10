import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mounika',
    company: '7-Eleven',
    hike: '45% Salary Hike',
    text: '"HireWay completely changed my career trajectory. The resume makeover and daily job applications were incredible. Within weeks I had my offer letter from 7-Eleven!"',
    initial: 'M',
    color: 'bg-blue-600',
  },
  {
    name: 'Abhishek',
    company: "Lowe's",
    hike: '60% Salary Hike',
    text: '"The mock interviews were a game-changer! 60% of the questions HireWay prepared me for actually came in my interview. Got placed at Lowe\'s in just 30 days!"',
    initial: 'A',
    color: 'bg-green-500',
  },
  {
    name: 'Bhanu',
    company: 'Licious',
    hike: '55% Salary Hike',
    text: '"I was applying to jobs randomly for months with zero callbacks. HireWay\'s profile optimization + targeted applications got me multiple interview calls in the first week!"',
    initial: 'B',
    color: 'bg-amber-500',
  },
  {
    name: 'Rajesh',
    company: 'Infosys',
    hike: '48% Salary Hike',
    text: '"HireWay\'s team applied to 20–30 jobs daily on my behalf while I focused on interview prep. The strategy worked perfectly — placed at Infosys in 45 days!"',
    initial: 'R',
    color: 'bg-red-500',
  },
  {
    name: 'Priya',
    company: 'TCS',
    hike: '52% Salary Hike',
    text: '"From resume building to offer letter, HireWay was with me every step. Their LinkedIn optimization got recruiters reaching out proactively. Absolutely recommend!"',
    initial: 'P',
    color: 'bg-teal-500',
  },
  {
    name: 'Vikram',
    company: 'Wipro',
    hike: '40% Salary Hike',
    text: '"I was looking for a new job while employed and HireWay handled everything discreetly. Their confidential approach and expert guidance helped me land a dream role at Wipro!"',
    initial: 'V',
    color: 'bg-blue-500',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">REAL RESULTS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Success Stories That Speak</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every story here is a real person who trusted HireWay and transformed their career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {t.name} — {t.company}
                  </div>
                  <div className="text-green-600 text-xs font-semibold">↑ {t.hike}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
