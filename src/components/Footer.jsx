import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import waveSvg from '../assets/footer-wave.svg';

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      <img
        src={waveSvg}
        alt="Footer wave"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundColor: 'white' }}
      />

      <div className="relative z-10 text-white pt-55 pb-[50px] px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div className="md:col-span-1">
            <div className="flex items-center mb-4 space-x-3">
              <div className="w-10 h-10 bg-orange-primary flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="font-semibold text-lg">E-learn</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              <strong>E-Learn</strong> is an e-learning platform offering practical, engaging, and accessible courses designed to help students build skills and achieve their goals.
            </p>
          </div>

          <div className="text-sm opacity-90">
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {['Blog', 'About Us', 'Team', 'Instructors', 'Privacy Policy', 'Terms & conditions'].map(item => (
                <li key={item}><a href="#" className="hover:text-orange-600">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="text-sm opacity-90">
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {['Home', 'Dashboard', 'FAQs', 'Services', 'Why us?'].map(item => (
                <li key={item}><a href="#" className="hover:text-orange-600">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="text-sm opacity-90">
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['IT Courses', 'Designing Courses', 'Marketing Courses', 'Business Courses', 'Public Development Courses', 'Creative Arts Courses'].map(item => (
                <li key={item}><a href="#" className="hover:text-orange-600">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="text-sm opacity-90">
            <h3 className="font-semibold mb-4">Address</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Location</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>Call +977 9800000000</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>example@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Monday–Friday</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-50 border-t border-white/40 pt-6 flex flex-col md:flex-row items-center justify-between text-white/80">
          <div className="flex items-center space-x-5 mb-4 md:mb-0">
            <span className="text-sm font-semibold opacity-80">FOLLOW US ON</span>
            <FaFacebook className="cursor-pointer hover:text-orange-600" />
            <FaInstagram className="cursor-pointer hover:text-orange-600" />
            <FaLinkedin className="cursor-pointer hover:text-orange-600" />
          </div>

          <div className="text-xs opacity-70">
            Refund & Return Policy
          </div>

          <div className="text-xs opacity-70">
            © 2024 E-Learn All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
