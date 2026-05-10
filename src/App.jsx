import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import RegisterSection from './components/RegisterSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900">
      <Navbar onGetStarted={scrollToRegister} />
      <Hero onGetStarted={scrollToRegister} />
      <CompanyLogos />
      <Services />
      <HowItWorks />
      <SuccessStories />
      <RegisterSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
