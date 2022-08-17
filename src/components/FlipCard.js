import { useState } from "react"; 
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (card.variant === "click") { 
      setShowBack(!showBack); 
    } 
  } 

  return (
    <div
      className="flipcard-outer"
      onClick={handleClick}>

      {/* Handling hover variant flip */}
      <div
        className={cn("flipcard-inner", {
          showBack, 
          "hover-trigger": card.variant === "hover"
        })}>  

        {/* Front Side */}
        <div className="card front">
            <span>{card.front}</span>
        </div>

         {/* Back Side */}
         <div className="card back">
            <span>{card.back}</span>
        </div>

      </div> {/* inner div */}

    </div>  // outer div 
  );
}

export default FlipCard;