
import Enquiry from "@/components/enquiry/enquiry"
import MainSlider from "@/components/mainslider/mainslider";
import Trendingcard from "@/components/trendingcard/trendingcard"
export default function aboutus() {
  const options = {
    margin: 0,
    nav:false,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};
  return (<>
  
  <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'300px'}}>
  <MainSlider options={options}/>
</div>
  </>
  )
}

