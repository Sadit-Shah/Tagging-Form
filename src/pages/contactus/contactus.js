import cstyle from './contactus.module.scss'
import contactuscss from './contactus.module.scss';
import contactcss from './contactus.module.scss'
export default function contactus() {
    return (
        <>


       <div className={contactcss.contactform}>
          <div className={contactcss.heading}>
          <h3> Our support team will get back to you ASAP via email. </h3>
          </div>
            <form name='details'>
                <label className={contactcss.label}>Name</label>
                  <input type='text' placeholder='Enter Your Name'></input>

            </form>
      


       </div>


      </>



       
      
    )
}