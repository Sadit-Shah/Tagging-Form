
import Image from 'next/image'
import Trendingcardcss from './trendingcard.module.scss'

export default function Trendingcard() {
    return (
        <>
            <div className={Trendingcardcss.cardcont}>
                <div className={Trendingcardcss.imgcont}>
                    <Image src="/images/gulmarg.jpg" width={200} height={330} />
                </div>
                <div className={Trendingcardcss.desc}>
                    <h5>
                    <a href=''> South India hill Stations will welcome you warmly with cool embrace and aromatic fragrance. </a>
                    </h5>
                </div>

            </div>
        </>
    )
}