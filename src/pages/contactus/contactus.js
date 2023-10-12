import contactcss from './contactus.module.scss'
export default function contactus() {
    return (
        <>
            <div className={contactcss.contactcont} >
                <div className={contactcss.details}>
                    <div className={contactcss.icon}>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                    </div>
                    <div className={contactcss.address}>
                        <span>Address</span>
                        <span className={contactcss.subtext}>Address</span>
                    </div>
                    <div>

                    </div>

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





        </>





    )
}