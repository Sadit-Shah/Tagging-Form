import layoutcss from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
            <div style={{
                position:'fixed', 
                right:0,
                bottom:0, 
                width:'250px', 
                backgroundColor:'#03a84e',
                borderRadius:'5px 5px 0px 0px',
                padding:'0px 15px',
                height:'40px',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                color:'#fff'
                }}>
                    <span>Quick Enquiry</span>                    
                </div>
        </>
    )
}