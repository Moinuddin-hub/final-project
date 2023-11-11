import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Feature/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;