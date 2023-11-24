import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
   const {googleSingIn}=useAuth();
   const axiosPublic=useAxiosPublic();
   const navigate=useNavigate();
    const handleGoogleSing=()=>{
        googleSingIn()
        .then((result) =>{
               console.log(result.user);
               const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
               }
               axiosPublic.post('/users',userInfo)
               .then(res=>{
                console.log(res.data);
                navigate('/');
               })

        })
        .catch((error)=>{
            console.log(error);
        })  
    }
    return (
        <div>
             <div className="px-4 ml-4">
             <div className="divider">OR</div>
            <button onClick={handleGoogleSing} className="btn btn-accent">
                <FaGoogle></FaGoogle>
                Google
            </button>
             </div>
        </div>
    );
};

export default SocialLogin;