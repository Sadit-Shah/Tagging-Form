import contactcss from './contactus.module.scss'
export default function contactus() {
    return (
        <>
            <div className={contactcss.contactcont} >
                <div className={contactcss.address}>
                    <div className={contactcss.location}>
                        <div className={contactcss.locicon}>
                                <span>
                                <i class="fa-sharp fa-solid fa-location-dot"></i>
                                </span>
                        </div>
                        <div className={contactcss.locdesc}>
                            <span>Address</span>
                        </div>

                    </div>
                    {/* <span>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                    </span>
                    <div className={contactcss.desc}>
                        <h3>Address</h3>
                    
                      <br/>
                      <span>Ellahibagh, Hazratbal Road,<br/>Near Grid Station-190020</span>
                      </div> */}
                </div>
                <div className={contactcss.form}>
                      <span className={contactcss.title}>Send Us A Message </span>
                      <label> TELL US YOUR NAME *</label> 
                      <div className={contactcss.name} >
                            <input className={contactcss.textbox} placeholder='First Name'></input>
                            <input className={contactcss.textbox} placeholder='Last Name'></input>
                      </div>

                      <label>ENTER YOUR EMAIL *</label> 
                      <div className={contactcss.email} >
                            <input className={contactcss.textbox} placeholder='Eg. example@gmail.com'></input>
                           
                      </div>
                      <label>ENTER YOUR PHONE NUMBER *</label> 
                      <div className={contactcss.email} >
                            <input className={contactcss.textbox} placeholder='9906000000'></input>
                           
                      </div>
                      <label>MESSAGE *</label> 
                      <div className={contactcss.message} >
                            <textarea className={contactcss.msg} placeholder='Write us a message'></textarea>
                           
                      </div>
                      <div className={contactcss.button}>
                 <input type="button" value="Send Message" />

                 </div>
                </div>
                 
                 

            </div>





            {/* <div className={contactcss.contactcontainer}>
            <div className={contactcss.contactform}>
                <div className={contactcss.heading}>
                    <h3> Our support team will get back to you ASAP via email. </h3>
                </div>
                <div classN ame={contactcss.details}>
                    <div className={contactcss.fname}>
                    <label>First Name</label>
                    <input type='text' placeholder='Enter Your First Name'></input>
                    </div>

                    <div className={contactcss.fname}>
                    <label>Middle Name</label>
                    <input type='text' placeholder='Enter Your Middle Name'></input>
                    </div>

                    <div className={contactcss.fname}>
                    <label>Last Name</label>
                    <input type='text' placeholder='Enter Your Last Name'></input>
                    </div>


            </div>



        </div >

        </div> */}
        </>





    )
}