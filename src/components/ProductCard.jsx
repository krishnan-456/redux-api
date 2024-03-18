import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/Reducer";

const ProductCard = () => {
  const productData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <div className="container">
      {productData.map((product,i) => (
        <div key={i}>
          <div className="card">
            <div className="card-image">
                <img src={product.image} alt={product.title} className="card-image-size"/>
            </div>
            <div className="card-desc">
                <div className="card-desc-title">{product.title.slice(0,20)}</div>
                <div className="card-desc-price">$ {product.price}</div>
            </div>
            <div><button className="card-btn">Try now</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
