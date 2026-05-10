import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const items = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'stakdindia@gmail.com',
    sub: "We'll respond within 24 hours",
    link: 'mailto:stakdindia@gmail.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 98765 43210',
    sub: 'Quick responses on WhatsApp',
    link: 'https://wa.me/919876543210',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon–Sat: 9AM–8PM',
    sub: 'Sun: 10AM–4PM',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: MapPin,
    title: 'Based In',
    value: 'Bengaluru, India',
    sub: 'Serving professionals pan-India',
    color: 'bg-red-50 text-red-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions? We're here to help. Reach out and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-blue-600 font-semibold text-sm hover:underline block mb-1">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-800 font-semibold text-sm mb-1">{item.value}</p>
              )}
              <p className="text-gray-400 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
