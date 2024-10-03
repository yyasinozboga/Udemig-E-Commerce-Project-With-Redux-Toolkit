import { storeData } from "../../public/assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div className="flex flex-wrap w-[65%] mx-auto justify-center gap-5 pb-5">
      {storeData.slice(0, 6).map((product) => (
        <ProductSectionItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
