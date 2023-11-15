
import { Link,  useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
// import axios from "axios";



const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const {user}=useAuth();
  const location=useLocation();
  const navigate=useNavigate();
  const axiosSecure=useAxiosSecure();
  const [,refetch] =useCart();


  const handleAddToCart=(food)=>{
    // console.log(food);
    if(user && user.email){
        // navigate('/login');
        console.log(user.email,food);
        const cartItem={
            menuId:_id,
            email:user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/carts',cartItem)
       .then(res=>{
        console.log(res.data)
         if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:`${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items
        
          refetch();
         }
       })
    }
else{
  Swal.fire({
    title: "Your are not Login",
    text: "please  login to add to cart ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Login!"
  }).then((result) => {
    if (result.isConfirmed) {
       navigate('/login',{state:{from:location}});
  
    }
  });
}

  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className=" absolute right-4 mr-4 mt-4  bg-slate-900 text-white">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button onClick={()=> handleAddToCart(item)}
               className="btn btn-primary border-0 border-b4 mt-4">
                Add cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
