import ProductCard from "./components/ProductCard";
import "./scss/main.scss";

const App = () => {
  return (
    <div>
      <div className="title-card">FETCH PRODUCTS DATA USING REDUX</div>
      <ProductCard />
    </div>
  );
};

export default App;
