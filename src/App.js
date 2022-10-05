import "./App.css";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import List from "./list";

function App() {
  const [product,setProduct]=useState([{
    id:1,
    name:"iphone",
    price:100000,
    img:"https://th.bing.com/th/id/OIP.GJZWYmlr5MBe1Rebda0uwwHaJr?w=148&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  },
  {
    id:2,
    name:"ipad",
    price:30000,
    img:"https://www.resetdigitale.it/120746-thickbox_default/tablet-apple-ipad-10-32gb-wifi-grigio.jpg"
    
  },
  {
    id:3,
    name:"iwatch",
    price:20000,
    img:"https://th.bing.com/th/id/OIP.rM0yOeACSofQ6wP68Fp_nwHaHa?w=209&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  },
  {
    id:4,
    name:"ipen",
    price:10000,
    img:"https://i.pinimg.com/originals/4d/22/f2/4d22f20aa7c95a971c97a13f84fe3236.jpg"
    
  },
  {
    id:5,
    name:"Mac book",
    price:200000,
    img:"https://th.bing.com/th/id/OIP.T3hrhEBcsVYNUJ-_5t1oKgHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  },
  {
    id:6,
    name:"iphone pro",
    price:120000,
    img:"https://th.bing.com/th/id/OIP.nmaSsI5i601psFMpDDmWlgHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.25&pid=1.7"
  }])
  const [carditem,setcarditem]=useState([])
 let addToCard=(product)=>{
   setcarditem([...carditem,product])
  }
  let removeFromCard=(product)=>{
    const indexOf=carditem.findIndex(obj=>obj.id===product.id)
    carditem.splice(indexOf,1)
    setcarditem([...carditem])
  }

  return (
    <div className="app">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
           {
         product.map((product)=>{
          return <Card product={product} addToCard={addToCard} carditem={carditem}/>

         })
           }
          </div>
        </div>
      
          <div id="row" className="col-lg-4" style={{marginTop:"25px"}}>
          <h4>card</h4>
            <List carditem={carditem} removeFromCard={removeFromCard}/>
           
          </div>
         </div>
    </div>
  );
}
export default App;
