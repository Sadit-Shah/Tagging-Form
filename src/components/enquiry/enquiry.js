"use client"
import enquiryFormCSS from './enquiry.module.scss'
import react, { useState } from 'react'
export default function Enquiry() {
    const [quickEnquiry,setquickEnquiry]=useState(false)
    function handleenquiryWindow (){
        quickEnquiry?setquickEnquiry(false):setquickEnquiry(true)   
        console.log(quickEnquiry)     
    }
    return (
        <>

            <div className={`${enquiryFormCSS.enqContainer} ${quickEnquiry ?enquiryFormCSS.active:''}`}>
                <div className={enquiryFormCSS.heading} onClick={handleenquiryWindow}>
                <h3>Quick Enquiry</h3>
                <i className={`${quickEnquiry ?'fa-regular fa-circle-xmark' :'fa-solid fa-arrow-up'}`}></i>
                </div>
                <div className={enquiryFormCSS.enqform}>
                    <form>
                        <input placeholder="Full Name*" />
                        <input placeholder="Email Address*" />
                        <input placeholder="Mobile Number*" />
                        <input placeholder="Enter Your City*" />
                        <input placeholder="Arrival City*" />
                        <input placeholder="No of Persons*" />
                        <input placeholder="No of Days*" />
                        <textarea placeholder="Would you like to provide more details*" />
                    </form>
                </div>
              <input type="button" className={enquiryFormCSS.btnsubmit}  
              value="Submit" />            
            </div>

        </>


    )
}