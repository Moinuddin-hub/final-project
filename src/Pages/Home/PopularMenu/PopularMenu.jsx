import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
//    const [menu,setMenu]=useState([]);
const [menu]=useMenu();
const popular=menu.filter(item=>item.category==='popular');

//    useEffect(()=>{
//     fetch('menu.json')
//     .then(res=>res.json())
//     .then(data=>{
//         const popularItems=data.filter(item=>item.category==='popular');
//         setMenu(popularItems);
//     })
//    },[])

    return (
        <section>
             <SectionTitle 
               heading='From Our Menu'
               subHeading='Popular item'
              >  </SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
            {
             popular.map(item=><MenuItem key={item._id}  item={item}></MenuItem>)
            }
        </div>
           
        </section>
    );
};

export default PopularMenu;