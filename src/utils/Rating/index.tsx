import { Star } from "@phosphor-icons/react";

const Rating = (rating: number) => {
  const totalStar = 5;
  const starts = [];
  for (let i = 1; i <= totalStar; i++) {
    const isFilld = i <= rating;
    starts.push(
      <Star
        size={20}
        color="#FF859B"
        weight={isFilld ? "fill" : "thin"}
        key={i}
      />
    );
  }
  return starts;
};

export default Rating;
