import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function RatingStars({ rating, color }: { rating: number; color?: string }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // ستاره کامل
      stars.push(<FaStar key={i} className={color} />);
    } else if (rating >= i - 0.5) {
      // نیم‌ستاره
      stars.push(<FaStarHalfAlt key={i} className={color} />);
    } else {
      // ستاره خالی
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
}

export default RatingStars;
