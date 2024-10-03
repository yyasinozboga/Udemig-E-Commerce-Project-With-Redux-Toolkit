import { useState } from "react";
import { sliderData } from "../../public/assets/data/dummyData";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const calculateIndex = (index) => {
    return index >= sliderData.length
      ? sliderData.length - 1
      : index <= 0
      ? 0
      : index;
  };

  const decreaseIndex = () => {
    setIndex((prev) => calculateIndex(prev - 1));
  };

  const IncreaseIndex = () => {
    setIndex((prev) => calculateIndex(prev + 1));
  };

  return (
    <div className="flex relative slider overflow-x-hidden">
      {sliderData.map((slider) => (
        <div
          key={slider.id}
          className={
            Number(slider.id) === index
              ? "opacity-100 duration-700 scale-100 min-w-full relative"
              : "opacity-0 duration-700 scale-95"
          }
        >
          {Number(slider.id) === index && (
            <>
              <img src={slider.img} className="object-cover size-full" />
              <h1 className="text-white font-bold text-4xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {slider.text}
              </h1>
            </>
          )}
          <div className="flex gap-2 absolute bottom-1/4 left-1/2 -translate-x-1/2">
            {sliderData.map((slider) => (
              <button
                key={slider.id}
                className={`size-5 rounded-full ${
                  Number(slider.id) === index ? "bg-green-300" : "bg-white"
                }`}
                onClick={() => setIndex(calculateIndex(Number(slider.id)))}
              ></button>
            ))}
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 start-5 opacity-[.7] hover:opacity-100 duration-300"
        onClick={decreaseIndex}
      >
        <FaCircleArrowLeft className="text-white size-10" />
      </button>
      <button
        className="absolute top-1/2 end-5 opacity-[.7] hover:opacity-100 duration-300"
        onClick={IncreaseIndex}
      >
        <FaCircleArrowRight className="text-white size-10" />
      </button>
    </div>
  );
};

export default Slider;
