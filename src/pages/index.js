
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Slider from '@/components/slider/slider'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'


export default function Home() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })
  

  return (
    
    <>
      <Head>
        <title>OpenSkyTrips</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        


      </Head>
      
       <div className={styles.slider} id="player">
       {/*   <iframe id="ytplayer" type="text/html" width="100%" height="100%"
				src="https://www.youtube-nocookie.com/embed/1SiUArkp0dU?si=J3EURPGKmKSqkvkD&amp;loop=1&amp;autoplay=1&amp;mute=0&amp;controls=0&amp;modestbranding=1" 	
				frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen></iframe>  */}

  
<iframe width="100%" height="100%"
src="https://www.youtube.com/embed/1SiUArkp0dU?si=sWltl3cuvoOboNQd&amp;
controls=0&amp;frameborder=0&amp;autoplay=1&amp;"   allow="accelerometer; 
 clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



      </div>

      <div data-aos="fade-up" className={styles.pdsection}>
        <div className={styles.pdheading}>
          <span className={styles.h1}>Take a look at Our</span>
          <span className={styles.h5}>Most Popular Destinations</span>
        </div>
        <div className={styles.pdestinations}>
          <div data-aos="fade-left" className={styles.pdcard}>
            <img src="images/gulmarg.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Gulmarg</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>
          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="images/pahalgham.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Pahalgam</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>
          </div>
          <div data-aos="fade-right" className={styles.pdcard}>
            <img src="images/srinagar.jpg" alt="" width="100%" height="290px" />
            <div className={styles.desc}>
              <span>Srinagar</span>
              <input type="button" className={styles.btnknowmore} value="Know More" />
            </div>

          </div>
        </div>
      </div>

      <div className={styles.abtcont}>
        <img data-aos="fade-left" src="images/palne.jpeg" />
        <div data-aos="fade-up" className={styles.habt}>
          <div className={styles.abtitle}>
            <span>About Us</span>
            <h2>Get ready for real time adventure</h2>
          </div>
          <div className={styles.abcaption}>
            <p className={styles.mb50}>Let’s start your journey with us, your dream will come true.</p>
            <p className={styles.mb50}>The world's best travel destination 'KASHMIR' hailed all over the world for its incredible
              natural beauty
              cradled high in the lofty green Himalayas surrounded by mountain peaks,
              lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens. </p>
            <p className={styles.mb50}>Our Services Are Ideal for Individuals, Couples, Families and Groups.
            </p>
            <div className={styles.bydbtn}>
              <input type="button" className={styles.byd} value="Book Your Destination" />
            </div>
          </div>
        </div>
      </div>
      <Slider/>
    </>

  )
}
