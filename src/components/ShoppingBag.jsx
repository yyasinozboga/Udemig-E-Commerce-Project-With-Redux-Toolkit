import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  calculateProduct,
  totalPrice,
} from "../redux/slices/ProductSlice";

const ShoppingBag = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { products, price } = useSelector((store) => store.products);
  const handleClick = (id) => {
    dispatch(removeProduct(id));
    dispatch(calculateProduct());
    dispatch(totalPrice());
  };

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <Dialog open={isOpen} handler={handleOpen}>
      <DialogHeader className="border-b-2">Shopping Bag</DialogHeader>
      {products.length > 0 ? (
        <DialogBody className="flex flex-col gap-5 h-[42vh] overflow-y-auto products-container">
          {products?.map((product) => (
            <div key={product.id} className="grid grid-cols-2">
              {console.log(product)}
              <div className="flex flex-col gap-2">
                <figure className="w-[150px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="size-full object-cover rounded-lg"
                  />
                </figure>

                <h1 className="font-bold text-lg text-black">{product.name}</h1>
                <p className="text-gray-500">{product.text}</p>
              </div>

              <div className="flex flex-col gap-2 text-black">
                <span>Selected Size: {product.size[0]}</span>
                <div className="flex items-center gap-2">
                  <span>Selected Color:</span>
                  <div
                    className="rounded-full size-4"
                    style={{
                      backgroundColor:
                        typeof product.color === "object"
                          ? product.color[0]
                          : product.color,
                    }}
                  />
                </div>
                <span>Amount: {product.amount}</span>
                <span>Single Item Price: {product.price}$</span>
                <span>Total Item Price: {price}$</span>
                <Button
                  className="bg-red-400 w-[100px]"
                  onClick={() => handleClick(product.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </DialogBody>
      ) : (
        <h1 className="p-4 font-bold text-2xl text-black">Your bag is empty</h1>
      )}
      <DialogFooter className="flex flex-nowrap justify-between items-center gap-2 border-t-2 px-1 lg:p-4">
        {products.length > 0 ? (
          <span className="font-bold text-black whitespace-nowrap">
            Total Price of All Products: {price}$
          </span>
        ) : (
          <span className="font-bold text-black whitespace-nowrap text-lg">
            Add some products
          </span>
        )}
        <div className="flex items-center gap-2">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default ShoppingBag;
