import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { storeData } from "../../../public/assets/data/dummyData";
import { colors, filterCategories, sizes } from "../../utils/constant";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import FilteredCard from "./FilteredCard";

const FilteredProducts = () => {
  const { category } = useParams();
  const filteredProducts = storeData.filter(
    (product) => product.type === category,
  );
  const [products, setProducts] = useState(filteredProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByProductPrice = (products) => {
    return products.sort((a, b) => b.price - a.price);
  };

  const handleClick = (e) => {
    const value = e.target.value;
    const type = e.target.dataset.type;
    searchParams.set(type, value);
    setSearchParams(searchParams);
    for (let [key, value] of searchParams.entries()) {
      if (key === "price") {
        setProducts((prev) => sortByProductPrice(prev));
      }

      if (key === "gender") {
        setProducts(products.filter((product) => product.gender === value));
      }

      if (key === "color") {
        setProducts(
          products.filter((product) => product.color.includes(value)),
        );
      }

      if (key === "size") {
        setProducts(products.filter((product) => product.size.includes(value)));
      }
    }
  };

  const clearFilter = () => {
    setSearchParams(new URLSearchParams());
    setProducts(filteredProducts);
  };

  return (
    <div className="flex flex-col gap-5 p-12">
      <h1 className="font-bold text-3xl text-gray-600">{category}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {filterCategories.map((category, key) => (
            <Button
              key={key}
              size="lg"
              variant="outlined"
              data-type={category.type}
              value={category.name}
              onClick={handleClick}
            >
              {category.name}
            </Button>
          ))}

          <Menu>
            <MenuHandler>
              <Button variant="outlined" size="lg">
                Select a color
              </Button>
            </MenuHandler>
            <MenuList>
              {colors.map((item, key) => (
                <MenuItem
                  key={key}
                  style={{ color: item.color, fontWeight: "bold" }}
                  data-type={item.type}
                  value={item.color}
                  onClick={handleClick}
                >
                  {item.color}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <MenuHandler>
              <Button variant="outlined" size="lg">
                Select a size
              </Button>
            </MenuHandler>
            <MenuList>
              {sizes.map((item, key) => (
                <MenuItem
                  key={key}
                  data-type={item.type}
                  value={item.size}
                  onClick={handleClick}
                >
                  {item.size}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
        <Button size="lg" variant="outlined" onClick={clearFilter}>
          Clear Filter
        </Button>
      </div>
      <FilteredCard products={products} />
    </div>
  );
};
export default FilteredProducts;
