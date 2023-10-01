import enquiryFormCSS from './enquiry.module.scss'
import styles from '@/styles/Home.module.scss'

export default function Enquiry() {
    return (
        <>

            <div className={enquiryFormCSS.enqContainer}>
                <h2>Quick Enquiry</h2>
                <div className={enquiryFormCSS.enqform}>
                    <form>
                        <input placeholder="Full Name*" />
                        <input placeholder="Email Address*" />
                        <input placeholder="Mobile Number*" />
                        <input placeholder="Enter Your City*" />
                        <input placeholder="Arrival City*" />
                        <input placeholder="No of Persons*" />
                        <input placeholder="No of Days*" />
                        <textarea placeholder="Please Provide More Details*" />
                    </form>
                </div>

              <div className={styles.bydbtn}>
              <input type="button" className={styles.byd} button onClick={""} 
              value="Submit" />

            </div>
            </div>

        </>


    )
}