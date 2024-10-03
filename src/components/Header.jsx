import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ShoppingBag from "./ShoppingBag";
import { logOut } from "../redux/slices/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.products);
  const [isOpen, setIsOpen] = useState(false);
  const { name, image } = useSelector((store) => store.auth);

  return (
    <>
      <header className="header">
        <div className="bg-black hidden lg:block text-white text-center font-bold text-lg p-4">
          <h1>Redux Toolkit Time</h1>
        </div>
        <div className="flex flex-row justify-between items-center w-full sm:w-[90%] lg:w-[60%] mx-auto px-4 sm:px-0">
          <figure>
            <img src="/assets/images/logo.png" className="logo" />
          </figure>

          <nav className="flex items-center gap-4 sm:gap-10 font-bold">
            <div className="flex items-center gap-2">
              <FaRegHeart className="size-6" />
              <span className="hidden sm:block">Whish List</span>
            </div>
            <div
              className="flex items-center gap-2"
              onClick={() => setIsOpen(true)}
            >
              {amount > 0 && <span>{amount}</span>}
              <HiOutlineShoppingBag className="size-6" />
              <span className="hidden sm:block">Shopping Bag</span>
            </div>
            <div
              className="flex items-center gap-2"
              onClick={() => dispatch(logOut())}
            >
              <figure className="w-10 h-10">
                <img
                  src={
                    image
                      ? `${image}`
                      : "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="rounded-lg size-full object-cover"
                />
              </figure>
              <span className="hidden sm:block">Hi {name}</span>
            </div>
          </nav>
        </div>
        <div className="text-white hidden lg:flex bg-black justify-evenly items-center p-4 font-bold">
          <span>50% OFF</span>
          <span>Free shopping and returns</span>
          <span>Different payment methods</span>
        </div>
      </header>
      {isOpen && <ShoppingBag isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
