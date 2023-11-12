import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import PizzaImg from '../../assets/menu/pizza-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'
import SaladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const[menu]=useMenu();
  const desserts=menu.filter(item=>item.category==='dessert');
  const soup=menu.filter(item=>item.category==='soup');
  const salad=menu.filter(item=>item.category==='salad');
  const pizza=menu.filter(item=>item.category==='pizza');
  const offered=menu.filter(item=>item.category==='offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
     {/* <PopularMenu></PopularMenu> */}

     <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
     <MenuCategory items={offered}></MenuCategory>

     <MenuCategory items={desserts} title={"desserts"} img={dessertImg}></MenuCategory>
     <MenuCategory items={pizza} title={"pizza"} img={PizzaImg}></MenuCategory>
     <MenuCategory items={soup} title={"soup"} img={SoupImg}></MenuCategory>
     <MenuCategory items={salad} title={"salad"} img={SaladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
