import { useState } from "react";
import logo1 from "./../../../../public/icons/logo.svg";
import logo2 from "./../../../../public/icons/logo-pink.svg";

function IconClick() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      <img src={isLiked ? logo1 : logo2} alt="img" />
    </div>
  );
}

export default IconClick;
