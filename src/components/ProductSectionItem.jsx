import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  calculateProduct,
  totalPrice,
} from "../redux/slices/ProductSlice";

const ProductSectionItem = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const found = products.find((item) => item.id === product.id);
  const handleClick = () => {
    if (!found) {
      const newProduct = { ...product, amount: 1 };
      dispatch(addProduct(newProduct));
    } else {
      const newProduct = { ...found, amount: found.amount + 1 };
      dispatch(updateProduct(newProduct));
    }
    dispatch(totalPrice());
    dispatch(calculateProduct());
  };

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 text-center">
          <Typography color="blue-gray" className="font-bold text-2xl">
            {product.name}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-center"
        >
          {product.text}
        </Typography>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            <span className="text-red-400 me-1">Size Left:</span>
            {product.size[0]}
          </p>

          <div className="flex items-center gap-1">
            <span className="text-sm">Color:</span>
            <div
              className="size-4 rounded-full"
              style={{ backgroundColor: product.color[0] }}
            />
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 text-center">
        <Button
          size="lg"
          ripple={true}
          variant="outlined"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductSectionItem;
