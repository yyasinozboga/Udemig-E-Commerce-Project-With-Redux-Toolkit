import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { storeData } from "../../public/assets/data/dummyData";
import { Select, Option, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  totalPrice,
  calculateProduct,
  updateProduct,
} from "../redux/slices/ProductSlice";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [choose, setChoose] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    setProduct(storeData.find((product) => product.id === id));
  }, [id]);

  const { products } = useSelector((store) => store.products);
  const found = products.find((item) => item.id === product.id);

  const handleChange = (key, event) => {
    setChoose({ ...choose, [key]: event });
  };

  const handleClick = () => {
    if (!found) {
      const newProduct = { ...product, ...choose, amount: 1 };
      console.log(newProduct);
      dispatch(addProduct(newProduct));
    } else {
      const newProduct = { ...product, ...choose, amount: found.amount + 1 };
      dispatch(updateProduct(newProduct));
    }
    dispatch(totalPrice());
    dispatch(calculateProduct());
  };

  return (
    product && (
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-around items-center p-5 lg:p-0 w-[95%] lg:w-[80%] h-screen mx-auto">
        <figure className="w-full lg:w-1/3 h-[50vh] lg:h-[90vh]">
          <img
            src={product.img}
            alt={product.name}
            className="size-full rounded-lg object-cover"
          />
        </figure>

        <div className="flex flex-col gap-2 font-bold w-[95%] lg:w-1/3">
          <h1 className="text-2xl">{product.name}</h1>
          <span className="text-yellow-900">15% OFF</span>
          <p className="text-gray-500">{product.text}</p>
          {product.size && product.size.length > 0 && (
            <Select
              label="Pick a size"
              onChange={(e) => handleChange("size", e)}
            >
              {product.size?.map((size, key) => (
                <Option key={key} value={size}>
                  {size}
                </Option>
              ))}
            </Select>
          )}

          {product.size && product.size.length > 0 && (
            <Select
              label="Pick a color"
              onChange={(e) => handleChange("color", e)}
            >
              {product.color?.map((color, key) => (
                <Option key={key} value={color} style={{ color: color }}>
                  {color}
                </Option>
              ))}
            </Select>
          )}
          <Button size="lg" variant="outlined" onClick={handleClick}>
            Add To Card
          </Button>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
