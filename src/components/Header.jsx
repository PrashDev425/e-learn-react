import { useState } from 'react';
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaChevronDown
} from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-gradient-to-r from-[#E2BF54] to-[#E0A239] text-black relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold">E-Learn</span>
          </div>

          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="hover:text-orange-primary transition-colors font-medium">Home</a>
            <a href="#" className="hover:text-orange-primary transition-colors">Dashboard</a>

            <div className="relative group">
              <button className="hover:text-orange-primary transition-colors flex items-center space-x-1">
                <span>Courses</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {['All Courses', 'Web Development', 'Data Science', 'Design', 'Marketing'].map((course) => (
                    <a key={course} href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors">{course}</a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-orange-primary transition-colors">Instructors</a>
            <a href="#" className="hover:text-orange-primary transition-colors">About us</a>

            <div className="relative group">
              <button className="hover:text-orange-primary transition-colors flex items-center space-x-1">
                <span>More</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {['Blog', 'Contact', 'Help Center', 'Community'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors">{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-lg px-3 py-2">
              <input type="text" placeholder="Search for anything" className="text-gray-800 outline-none flex-1 text-sm w-64" />
              <FaSearch className="text-gray-500" />
            </div>
            <div className="relative">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-orange-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-orange-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-primary transition-colors">Login</button>
            <button className="bg-orange-primary px-4 py-2 rounded hover:bg-orange-600 transition-colors">Register</button>
          </div>

          <div className="flex lg:hidden items-center space-x-3">
            <div className="relative">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-orange-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-orange-primary text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
            <button onClick={toggleMobileMenu} className="text-white hover:text-orange-primary transition-colors">
              <FaBars className="text-black text-xl" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#E2BF54] border-t border-blue-400 transition-all duration-300 z-40 opacity-100 visible">
              <div className="container mx-auto px-4 py-4">

                <div className="mb-6">
                  <div className="flex items-center bg-white rounded-lg px-3 py-2">
                    <input type="text" placeholder="Search for anything" className="text-gray-800 outline-none flex-1 text-sm" />
                    <FaSearch className="text-gray-500" />
                  </div>
                </div>

                <nav className="space-y-1">
                  {['Home', 'Dashboard', 'Instructors', 'About us'].map((item) => (
                    <a key={item} href="#" className="block py-3 px-4 hover:bg-blue-600 rounded-lg transition-colors">{item}</a>
                  ))}

                  <div className="relative">
                    <button onClick={() => toggleMobileDropdown('courses')} className="w-full flex items-center justify-between py-3 px-4 hover:bg-blue-600 rounded-lg transition-colors text-left">
                      <span>Courses</span>
                      <FaChevronDown className={`transition-transform duration-200 ${openDropdown === 'courses' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'courses' && (
                      <div className="bg-blue-600 rounded-lg mt-1 ml-4">
                        {['All Courses', 'Web Development', 'Data Science', 'Design', 'Marketing'].map((course) => (
                          <a key={course} href="#" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">{course}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <button onClick={() => toggleMobileDropdown('more')} className="w-full flex items-center justify-between py-3 px-4 hover:bg-blue-600 rounded-lg transition-colors text-left">
                      <span>More</span>
                      <FaChevronDown className={`transition-transform duration-200 ${openDropdown === 'more' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'more' && (
                      <div className="bg-blue-600 rounded-lg mt-1 ml-4">
                        {['Blog', 'Contact', 'Help Center', 'Community'].map((item) => (
                          <a key={item} href="#" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">{item}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>

                <div className="mt-6 space-y-3">
                  <button className="w-full bg-transparent border border-white text-white py-3 px-4 rounded-lg hover:bg-white hover:text-blue-primary transition-colors">Login</button>
                  <button className="w-full bg-orange-primary text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">Register</button>
                </div>
              </div>
            </div>

            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 opacity-100 visible transition-all duration-300"
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;