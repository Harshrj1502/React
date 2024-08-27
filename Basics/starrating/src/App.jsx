import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import react icons
import "./App.css";

function App({ noOfStars = 8 }) {
  // how to use usestate
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="star-rating">
        {/* array met */}

        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              // hover effect
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => setRating(index)}
              onMouseMove={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
