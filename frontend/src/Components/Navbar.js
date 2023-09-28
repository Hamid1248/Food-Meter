import React from "react";
import { NavLink} from "react-router-dom";
import styles from'../CSS/Navbar.module.css'
export const Navbar=()=>{
    let links=[
        {name:"Home",to:"/"},
        {name:"Favorites",to:"/favorites"},
        {name:"Bookings",to:"/NewBooking"},
        {name:"New Booking",to:"/booking"},
        {name:"Profile",to:"/profile"},
    ];
    return(
        
        <div className="shadow-md w-full fixed top-0
         left-0">
            <div className="md:flex sm: items-center justify-between  bg-black py-4 md:px-10 px-7" >
                <h2 className=" text-blue-500 text-xl"><a href="/home">Food Meter</a></h2>
            <ul className="md:flex md:items-center justify-center "> 
            {
                links.map((link)=>(
                    <li key={link.name} className="md:ml-8 text-xl text-white hover:text-blue-500">
                        <NavLink to={link.to}  >{link.name}</NavLink>
                    </li>
                ))
            }
         </ul>
         
         </div>

        </div>
   

        
    )
};