import CourseCard from "./components/CoursesCard";

const courses = [
    {
        id: 1,
        title: "UI/UX design",
        duration: "3 Months",
        instructor: "John Smith",
        rating: 5,
        reviews: 45,
        price: 10000,
        image: "/images/courses/ui-ux-design.png",
    },
    {
        id: 2,
        title: "Graphic Design",
        duration: "2 Months",
        instructor: "Sarah Johnson",
        rating: 4,
        reviews: 38,
        price: 10000,
        image: "/images/courses/graphic-design.png",
    },
    {
        id: 3,
        title: "Data Science",
        duration: "4 Months",
        instructor: "Mike Davis",
        rating: 5,
        reviews: 52,
        price: 10000,
        image: "/images/courses/data-science.png",
    },
    {
        id: 4,
        title: "MERN Stack",
        duration: "5 Months",
        instructor: "Alex Chen",
        rating: 3,
        reviews: 67,
        price: 10000,
        image: "/images/courses/mern-stack.png",
    },
    {
        id: 5,
        title: "Web Development",
        duration: "2 Months",
        instructor: "Emma Taylor",
        rating: 4,
        reviews: 29,
        price: 10000,
        image: "/images/courses/web-development.png",
    },
    {
        id: 6,
        title: "Project Mangement",
        duration: "6 Months",
        instructor: "David Brown",
        rating: 5,
        reviews: 73,
        price: 10000,
        image: "/images/courses/project-management.png",
    },
    {
        id: 7,
        title: "Digital Marketing",
        duration: "4 Months",
        instructor: "Rachel Green",
        rating: 5,
        reviews: 56,
        price: 10000,
        image: "/images/courses/digital-marketing.png",
    },
    {
        id: 8,
        title: "Business Analytics",
        duration: "3 Months",
        instructor: "Lisa Wilson",
        rating: 5,
        reviews: 41,
        price: 10000,
        image: "/images/courses/business-analytics.png",
    },
    {
        id: 9,
        title: "Brand Management",
        duration: "3 Months",
        instructor: "Lisa Wilson",
        rating: 5,
        reviews: 41,
        price: 10000,
        image: "/images/courses/brand-management.png",
    },
    {
        id: 10,
        title: "Public Speaking & Presentation Skills",
        duration: "3 Months",
        instructor: "Lisa Wilson",
        rating: 5,
        reviews: 41,
        price: 10000,
        image: "/images/courses/public-speaking-&-presentation-skills.png",
    },
    {
        id: 11,
        title: "3D Modeling & Animation",
        duration: "3 Months",
        instructor: "Lisa Wilson",
        rating: 5,
        reviews: 41,
        price: 10000,
        image: "/images/courses/3d-modeling-&-animation.png",
    },
];

const Courses = () => {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-gray-600 mb-2">Some of our most popular courses</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Explore Our Courses
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
