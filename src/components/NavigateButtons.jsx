import { categories } from "../utils/constant";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import clothes from "/assets/images/clothes.jpg";

const NavigateButtons = () => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <div className="flex gap-5 justify-center items-center">
        {categories.map((category, key) => (
          <Link to={`/filtredProducts/${category}`} key={key}>
            <Button size="lg" variant="outlined">
              {category}
            </Button>
          </Link>
        ))}
      </div>
      <h1 className="bg-black rounded-lg p-2 text-red-500 uppercase font-bold text-xl text-center w-[60%] mx-auto">
        Sales up to 50%
      </h1>
      <figure className="w-[80%] h-[600px] mx-auto">
        <img src={clothes} className="size-full rounded-lg shadow-2xl" />
      </figure>
      <h1 className="bg-black rounded-lg p-2 text-red-500 uppercase font-bold text-xl text-center w-[60%] mx-auto">
        Summer t-shirt sale 30%
      </h1>
    </div>
  );
};

export default NavigateButtons;
