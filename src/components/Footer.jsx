import { 
  FaFacebook,
  FaTwitter, 
  FaInstagram,
  FaLinkedin 
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-primary text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-orange-primary rounded flex items-center justify-center">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <span className="text-xl font-bold">E-Learn</span>
                        </div>
                        <p className="text-sm opacity-90 mb-4">
                            E-Learn is your gateway to acquiring new skills and advancing your career.
                            Join thousands of learners who have transformed their lives with our expert-led courses.
                        </p>
                        <div className="flex space-x-3">
                            <FaFacebook className="hover:text-orange-primary cursor-pointer" />
                            <FaTwitter className="hover:text-orange-primary cursor-pointer" />
                            <FaInstagram className="hover:text-orange-primary cursor-pointer" />
                            <FaLinkedin className="hover:text-orange-primary cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">About</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            {['About Us', 'FAQ', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-orange-primary">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Links</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            {['Courses', 'Dashboard', 'Instructors', 'Support'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-orange-primary">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Programs</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                            {['Beginner Courses', 'Advanced Courses', 'Business Courses', 'Free Courses'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-orange-primary">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-400 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
                    <p className="text-sm opacity-90">© 2024 E-Learn. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;