const stats = [
  { value: "100+", label: "Courses Available" },
  { value: "500+", label: "Students" },
  { value: "FREE", label: "Courses" },
  { value: "1000+", label: "Success Stories" },
];

const Stats = () => {
  return (
    <section className="w-full bg-white rounded-tl-[100px] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 ease-in-out"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-primary mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
