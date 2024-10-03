import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const FilteredCard = ({ products }) => {
  return (
    <div className="flex justify-between flex-wrap gap-5">
      {products.map((product) => (
        <Link key={product.id} to={`/productDetail/${product.id}`}>
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
                <Typography color="gray" className="font-bold text-2xl">
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
            </CardBody>
            <CardFooter className="flex items-center justify-between p-3 text-center border-t-2">
              <span>{product.price}$</span>
              <div className="flex items-center gap-5">
                {product.color.map((color) => (
                  <div
                    key={color}
                    className="size-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FilteredCard;
