import cstyle from './contactus.module.scss'

export default function contactus() {
    return (
        
            <div className={cstyle.contact_container}>
                    <div className={cstyle.contact_wrap}>
                    <h3>Get in touch</h3>
                    <form>

                    </form>
                    </div>
                    <div className={cstyle.contact_info}>
                            <div className={cstyle.dbox}>
                                <div className={cstyle.icon}></div>
                                <div><p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p></div>
                            </div>
                    </div>
            </div>
      
    )
}