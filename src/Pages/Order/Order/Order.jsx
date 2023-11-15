import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import OrderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
// import FoodCard from '../../../Components/SectionTitle/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const {category}=useParams();

    const[tabIndex,setTabIndex]=useState(category==='salad'?0:category==='pizza'?1:category==='soup'?2
    :category==="desserts"?3:4);
    const[menu]=useMenu();
   
    console.log(category);
  const desserts=menu.filter(item=>item.category==='dessert');
  const soup=menu.filter(item=>item.category==='soup');
  const salad=menu.filter(item=>item.category==='salad');
  const pizza=menu.filter(item=>item.category==='pizza');
  const offered=menu.filter(item=>item.category==='offered');
    return (
        <div>
            <Cover img={OrderImg} title="Order Food"></Cover>
 
  <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>
         
    <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
    <TabPanel> 
    <OrderTab items={soup}></OrderTab>
    </TabPanel>
    <TabPanel>  <OrderTab items={pizza}></OrderTab> </TabPanel>
    <TabPanel>  <OrderTab items={desserts}></OrderTab></TabPanel>
    <TabPanel>  <OrderTab items={offered}></OrderTab></TabPanel>
   
   
    
    
  </Tabs>

        </div>
    );
    }

export default Order;