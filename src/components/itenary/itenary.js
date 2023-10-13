import MainSlider from '../mainslider/mainslider'
import Slider from '../slider/slider'
import itenarycss from './itenary.module.scss'
export default function Itenary() {
    return (
        <>


            <div className={itenarycss.itenarycont}>
                <div className={itenarycss.slider}>
                    <MainSlider />
                </div>
                <div className={itenarycss.overview}>
                    <h3>Overview</h3>
                    <p> Kashmir is essentially earth's version of heaven. The beauty of this location is beyond describing it. You must personally experience it to believe it. Visits to unusual and lovely Kashmiri tourist destinations such as Srinagar, Gurez, and Tulail are included in our 5-night, 6-day beautiful Gurez Valley tour package.</p>

                </div>



                <h3>Recommended Itinerary</h3>
                <div className={itenarycss.dayinfo}>
                    <span>Day 01 </span>
                    Arrival- Srinagar
                </div>
                <p>Arriving Srinagar and exploring the area. </p>

                <div className={itenarycss.dayinfo}>
                    <span>Day 02 </span>
                    Srinagar to Gurez

                </div>
                <p>Gurez valley is in the high Himalayas in northern J & K. Discover the beauty of Gurez and view Harmukh Peak, one of the highest mountain peaks in Kashmir, from Razdan Top. Gurez Valley is home to the pyramid-shaped summit of Habba Khatoon Mountain</p>

                <div className={itenarycss.dayinfo}>
                    <span>Day 03</span>
                    Gurez to Srinagar
                </div>
                <p>Drive to Srinagar after breakfast, check in at hotel, and spend the rest of the day as you please. </p>

                <div className={itenarycss.dayinfo}>
                    <span>Day 04</span>
                    06Srinagar Departure
                </div>
                <p>Drive to the airport in Srinagar after breakfast to catch a flight back home. </p>

            </div>
        </>
    )

}