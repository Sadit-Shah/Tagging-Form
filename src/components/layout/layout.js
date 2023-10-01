import layoutcss from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import Enquiry from '../enquiry/enquiry'

export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
            <div style={{
                position:'fixed', 
                right:20,
                bottom:0, 
                width:'300px', 
                backgroundColor:'#03a84e',
                borderRadius:'5px 5px 0px 0px',
                padding:'7px 15px 15px 15px',                
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                color:'#fff'
                }}>
                    <Enquiry/>                    
                </div>
        </>
    )
}