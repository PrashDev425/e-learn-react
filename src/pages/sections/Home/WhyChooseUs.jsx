import { FaBook, FaDollarSign, FaClock, FaCertificate } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer high-quality courses, expert instructors, and flexible
            learning, empowering you to learn at your own pace and achieve your
            goals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-1 order-2 lg:order-1">
            <img
              src="/images/learning-together.png"
              alt="Learning together"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Feature Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            <div className="bg-blue-primary text-white p-4 md:p-6 rounded-lg">
              <FaBook className="text-xl md:text-2xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Diverse Course Selection
              </h3>
              <p className="text-sm opacity-90">
                Something for everyone, from beginner to advanced levels.
              </p>
            </div>

            <div className="bg-blue-primary text-white p-4 md:p-6 rounded-lg">
              <FaDollarSign className="text-xl md:text-2xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Affordable Pricing
              </h3>
              <p className="text-sm opacity-90">
                Access to high-quality education at budget-friendly rates.
              </p>
            </div>

            <div className="bg-blue-primary text-white p-4 md:p-6 rounded-lg">
              <FaClock className="text-xl md:text-2xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Flexible Learning
              </h3>
              <p className="text-sm opacity-90">
                Access courses anytime, anywhere at your own pace.
              </p>
            </div>

            <div className="bg-blue-primary text-white p-4 md:p-6 rounded-lg">
              <FaCertificate className="text-xl md:text-2xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Certification of Completion
              </h3>
              <p className="text-sm opacity-90">
                Receive certificates upon successful course completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
