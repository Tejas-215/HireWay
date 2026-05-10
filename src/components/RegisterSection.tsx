import { CheckCircle, Mail, Shield, TrendingUp } from 'lucide-react';
import RegisterForm from './RegisterForm';

const highlights = [
  { icon: Mail, text: 'Or send your resume to', link: 'chandrakumar3897@gmail.com', color: 'text-blue-300' },
  { icon: CheckCircle, text: '100% Free consultation — no strings attached', color: 'text-green-400' },
  { icon: Shield, text: 'Your information is 100% confidential', color: 'text-amber-400' },
  { icon: TrendingUp, text: 'Average 50% salary hike for our candidates', color: 'text-green-400' },
];

export default function RegisterSection() {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-2 pt-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Right Person.{' '}
              <span className="block">Right Time.</span>
              <span className="block text-amber-400">Right Place.</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We connect the right talent with the right opportunity at the right moment. Fill in your details and let's get started!
            </p>
            <div className="flex flex-col gap-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <h.icon size={18} className={`${h.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-blue-100 text-sm">
                    {h.text}
                    {h.link && (
                      <a
                        href={`mailto:${h.link}`}
                        className="text-amber-400 font-semibold ml-1 hover:underline"
                      >
                        {h.link}
                      </a>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Register Now — It's Free!</h3>
                <p className="text-gray-400 text-xs">Fill in your details & upload your resume. Data goes directly to our team!</p>
              </div>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
         