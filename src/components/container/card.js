import cardcss from './card.module.scss'

export default function Container() {
  return (
    <div className={cardcss.cardcont}>
      <div className={cardcss.imgcont}>
        <img src="../images/srinagar.jpg" />
      </div>

      <div className={cardcss.desc}>
        <h3>
          <strong>Family Tour Package</strong> <br></br>

        </h3>
        <div className={cardcss.star}>
          <i class="fa-solid fa-star "></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>

        <h6>
          <strong> 03 Nights 04 Days</strong> |  Customizable
        </h6>
        <h6>
          <strong>Cities</strong> : Srinagar
        </h6>

        <ul>
          <li> <i class="fa-solid fa-hotel"></i> <br />   Hotels</li>
          <li> <i class="fa-sharp fa-solid fa-bus"></i> <br />Transfer</li>
          <li> <i class="fa-sharp fa-solid fa-bowl-rice"></i> <br /> Meals</li>
          <li> <i class="fa-regular fa-images"></i> <br /> Sightseeing</li>
        </ul>

      </div>

      <div className={cardcss.details}>
        <span>
          <i class="fa-solid fa-indian-rupee-sign"></i> <br /> On request
        </span>
        <div className={cardcss.button} >
          <input type="button" value="Details" />
        </div>
        <div className={cardcss.button}>
          <input type="button" value="Book Now" />
        </div>
      </div>
    </div>
  );
};

