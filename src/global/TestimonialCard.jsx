import { FaStar, FaRegStar } from "react-icons/fa";

const TestimonialCard = ({ user, className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center space-x-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-14 h-14 rounded-full border-2 object-cover border-gray-300"
        />
        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user.description}
          </p>
        </div>
      </div>
      <div className="mt-3 flex">
        {[...Array(5)].map((_, index) =>
          index < user.rating ? (
            <FaStar key={index} className="text-yellow-500" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
