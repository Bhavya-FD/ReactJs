/* eslint-disable no-unused-vars */
import React, { PureComponent, useState } from 'react'
import "../Tasks/Task03.css"


export default function Pizza_Billing_Task() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [pizzaQty, setPizzaQty] = useState("");
  const [pastaQty, setPastaQty] = useState("");
  
  const addData = ()=>{
    console.log(name);
    console.log(phone);
    console.log(pizzaQty);
    console.log(pastaQty);
    

    setName("");
    setPhone("");
    setPizzaQty("");
    setPastaQty("");
  }
  

  return (
    <div>
      <div className="container-fluid">
          <div id='myContainer'>
            {/* navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark" id='myNavBar'>
              <a className="navbar-brand" href="#" id='logo'><img src="../../Images/pizza_logo3.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-black fs-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                    <dl className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <dt><a className="dropdown-item" href="#"><b>Pizzas</b></a></dt>
                      <dd><a className="dropdown-item" href="#">Margherita Pizza</a></dd>
                      <dd><a className="dropdown-item" href="#">Tandoori Paneer Pizza</a></dd>
                      <dd><a className="dropdown-item" href="#">Thin Crust Pizza</a></dd>
                      <dd><a className="dropdown-item" href="#">Cheesy Vagatable Pizza</a></dd>     
                      <dt><a className="dropdown-item" href="#"><b>Pastas</b></a></dt>
                      <dd><a className="dropdown-item" href="#">Macaroni</a></dd>
                      <dd><a className="dropdown-item" href="#">White Sauce Pasta</a></dd>
                      <dd><a className="dropdown-item" href="#">Cheesy Vagatable Pasta</a></dd>
                    </dl>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
        {/* User data card */}
        <section id='mySection'>
          <div id="subSection">
            <div id="card">
                <p>Hello ! Please Enter Your Details here...</p>
                <input type="text" id='nameInput' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} /> <br />
                <input type="number" id='nameInput' placeholder='Phone No.' value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
                <label htmlFor="No. of Pizza">No. of Pizza :</label><input type="number" value={pizzaQty} onChange={(e)=>{setPizzaQty(e.target.value)}} id='inputNum'/><br/>
                <label htmlFor="No. of Pasta">No. of Pasta :</label><input type="number" value={pastaQty} onChange={(e)=>{setPastaQty(e.target.value)}} id='inputNum'/><br/>
                <button onClick={addData}>Add</button>
            </div>
            <div id="offerCards">
              <h2>Our Popular Offers</h2>
              <div className='border-1 mb-2 border w-50 m-auto border-dark'></div> <br />
              <div id="offers">
                <div className="flexCard1">Buy 4 or More Pizzas & Get 1.5Ltr Softdrink Free..!!</div>
                <div className="flexCard3">Buy 4 or More Pizzas & Pastas & Get 2 Choco Brownie IceCream Free..!!</div>
                <div className="flexCard2">Buy 4 or More Pastas & Get 2 Bruschetta Free..!!</div>
              </div>
              <div id="billCard">
                <div id="billcard2">
                  <h3 className='mb-2'>Welcome! {name} to Slice & Spice Pizzeria..</h3>
                  <div className='border-1 mb-2 border border-dark'></div>
                  <h4>Your Pizza Order is : Rs. {pizzaQty*450}</h4>
                  <h4>Your Pizza Order is : Rs. {pastaQty*250}</h4>
                  <h4>Your Total Amount is : Rs. {pizzaQty*450 + pastaQty*250}</h4>
                  {pizzaQty >= 4 ? <h3 className='text-light fw-bolder'>Congratulations!! you Got 1.5Ltr Softdrink Free..!!</h3> : <h4></h4>} 
                  {pastaQty >= 4 ? <h3 className='text-light fw-bolder'>Congratulations!! you Got 2 Bruschetta Free..!!</h3> : <h4></h4>} 
                  {pastaQty >= 4 && pizzaQty >= 4 ? <h3 className='text-light fw-bolder'>Congratulations!! you Got 2 Choco Brownie IceCream Free..!!</h3> : <h4></h4>} 
                </div>  
              </div>
              <h2>Thank You ! Visit Again...!</h2>
            </div>
          </div>
        </section>
    </div>
    
    </div>
  )
}
