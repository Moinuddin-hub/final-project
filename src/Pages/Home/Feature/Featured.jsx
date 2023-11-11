import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-12 mt-12">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-60 justify-center items-center pt-12 pb-8 px-36">
        <div className="">
          <img src={featuredImg} alt="" className="w-[600px]" />
        </div>
        <div className="md:space-x-4 md:ml-10">
          <p className="md:ml-4">Aug 20,2029</p>
          <p className="uppercase">where can i get some?</p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quibusdam nobis repudiandae et enim velit vero aspernatur rerum eius
            quis.
          </p>
          <button className="btn btn-outline border-0 border-b4 mt-4">Secondary</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
