import contactcss from './contactus.module.scss'
export default function contactus() {
    return (
        <>
            <div className={contactcss.contactcont} >
                <div className={contactcss.details}>
                    <div className={contactcss.icon}>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <span style={{ fontSize: '30px' }}>Address<br />
                            <span style={{ fontSize: '20px' }}>Ellahibagh,Hazratbal road,Srinagar-190020</span></span>
                    </div>
                    <div className={contactcss.icon}>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                        <span style={{ fontSize: '30px' }}>Lets Talk<br />
                            <span style={{ fontSize: '20px' }}>+91-9906973143</span></span>
                    </div>
                    <div className={contactcss.icon}>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                        <span style={{ fontSize: '30px' }}>General Support<br />
                            <span style={{ fontSize: '20px' }}>openskytrips@gmail.com</span></span>
                    </div>




                    {/* <div className={contactcss.address}>
                        <span>Address</span>
                        <span className={contactcss.subtext}>Ellahibagh,Hazratbal road,Srinagar-190020</span>
                    </div> 


                    <div className={contactcss.icon}>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className={contactcss.address}>
                        <span>Lets Talk</span>
                        <span className={contactcss.subtext}>+91-9958299984,9958299985</span>
                    </div>

                    <div className={contactcss.icon}>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className={contactcss.address}>
                        <span>General Support</span>
                        <span className={contactcss.subtext}>openskytrips@gmail.com</span>
    </div>*/}

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

                {/* <div className={contactcss.left}>
                    <div className={contactcss.ic}>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                    </div>

                    <div className={contactcss.right}>
                        <span>Address</span>
                        <span className={contactcss.subtext}>Ellahibagh,Hazratbal road,Srinagar-190020</span>
                        <span>Lets Talk</span>
                        <span className={contactcss.subtext}>+91-9906000000,9906000001</span>
                        <span>General Support</span>
                        <span className={contactcss.subtext}>openskytrips@gmail.com</span>
                    </div>

                    
                </div> */}

            </div>





        </>





    )
}