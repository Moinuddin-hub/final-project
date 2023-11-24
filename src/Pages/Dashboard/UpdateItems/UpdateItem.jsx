import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { register, handleSubmit,reset } = useForm();
    const {name,category,price,recipe,_id}=useLoaderData();
    // console.log(item);
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();
  const onSubmit = async (data) =>{
    // image upload to imgbb and then get an url
    const imageFile={image:data.image[0]}
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'Content-type':'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuItem={
            name:data.name,
            category:data.category,
            price:parseInt(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        const menuRs=await axiosSecure.patch(`/menu/${_id}`,menuItem);
        console.log(menuRs.data)
        if(menuRs.data.modifiedCount>0){
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url',res.data);
  } 
    return (
        <div>
            <SectionTitle heading='Update Item'></SectionTitle> 

            <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
        

          <div className="form-control w-full py-6 ">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe here"
              defaultValue={name}
              {...register('name',{ required: true})}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full py-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category")}
                defaultValue={category}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full py-6 ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="price here"
                defaultValue={price}
                {...register('price',{ required: true})}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              defaultValue={recipe}
              {...register('recipe',{ required: true})}
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="mt-4">
          <input type="file"
              {...register('image',{ required: true})}
          className="file-input w-full max-w-xs" />
          </div>
            <button className="btn btn-neutral mt-8">
                Add Item </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;