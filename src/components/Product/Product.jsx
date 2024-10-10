import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { FaCircleArrowRight } from "react-icons/fa6";


const Product = () => {
    const[allProduct,setAllProduct]=useState([])
    const [dataLength, setDataLength] = useState(3);
    useEffect(()=>{
fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then((data)=>setAllProduct(data.products))

    },[])
    return (
        <div>
            <h1 className="text-5xl font-sans font-extrabold text-rose-500 mt-10 text-center">This Is Our Shop All Products</h1>
            <hr  className="w-full h-1 bg-black mt-4"/>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mt-10 mb-10 px-6">
                {
                    allProduct.slice(0, dataLength).map(product=> <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
            <div className={dataLength === allProduct.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(allProduct.length)}
          className="btn btn-primary mt-8 mb-8 items-center ml-[47%]"
        >
          See All Products <FaCircleArrowRight></FaCircleArrowRight>
        </button>
      </div>
        </div>
    );
};

export default Product;