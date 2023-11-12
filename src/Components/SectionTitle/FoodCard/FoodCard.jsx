import { Link } from "react-router-dom";

const FoodCard = ({ item}) => {
 const {name,image,price,recipe}=item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">

        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className=" absolute right-4 mr-4 mt-4  bg-slate-900 text-white" >{price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <Link to='/order'><button className="btn btn-primary border-0 border-b4 mt-4">Add cart</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
