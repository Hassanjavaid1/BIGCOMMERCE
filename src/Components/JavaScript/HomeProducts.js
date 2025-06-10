import { useContext, useEffect } from "react";
import { MyContext } from "./ContextHook";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import placeholder from "../Images/placeholder.jpg";

function HomeProduct() {
  const { productData, loading, setLoading } = useContext(MyContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);
  return (
    <div>
      <div className="container mx-auto p-8 pt-0 mt-2 text-center lg:mt-0">
        <Element name="Products">
          <h2 className="text-3xl mb-3 font-semibold"> Top Collections</h2>
          <div className="flex flex-wrap justify-center items-center gap-3 py-8">
            {productData.map(({ title, price, image, id }) => (
              <>
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <div
                    key={id + "2"}
                    className="flex flex-col items-center overflow-hidden h-full"
                  >
                    <>
                      <Link to={`ProductDetail/${id}`}>
                        <img
                          src={image || placeholder}
                          className="h-[20rem] w-[20rem] object-cover overflow-hidden duration-500 hover:scale-x-110"
                          alt=""
                        />
                      </Link>
                      <div className="mt-3">
                        <div className="text-lg font-semibold">
                          {String(title).slice(0, 20)}
                        </div>
                        <div className="text-md">${price}</div>
                      </div>
                    </>
                  </div>
                )}
              </>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
}

export default HomeProduct;
