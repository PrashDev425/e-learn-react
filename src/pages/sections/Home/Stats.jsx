const stats = [
  { value: "100+", label: "Courses Available" },
  { value: "500+", label: "Students" },
  { value: "FREE", label: "Courses" },
  { value: "1000+", label: "Success Stories" },
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-extrabold text-blue-primary mb-1">
                {stat.value}
              </div>
              <div className="text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
