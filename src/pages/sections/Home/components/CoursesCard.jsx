import { FaRegStar, FaStar } from "react-icons/fa6";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
                src={course.image}
                alt={`${course.title} course thumbnail`}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">
                    {course.title} | {course.duration}
                </h3>
                <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>
                <div className="flex items-center mb-3">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) =>
                            i < course.rating ? (
                                <FaStar key={i} className="text-yellow-400" />
                            ) : (
                                <FaRegStar key={i} className="text-gray-300" />
                            )
                        )}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({course.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xl md:text-2xl font-bold text-orange-primary">
                        Rs. {course.price.toFixed(2)}
                    </span>
                    <i
                        className="far fa-heart text-gray-400 hover:text-red-500 cursor-pointer"
                        aria-label="Add to wishlist"
                    ></i>
                </div>
                <button className="w-full bg-blue-primary text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    View Course
                </button>
            </div>
        </div>
    );
};

export default CourseCard;