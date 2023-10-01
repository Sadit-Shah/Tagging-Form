
import Image from 'next/image'
import Trendingcardcss from './trendingcard.module.scss'

export default function Trendingcard() {
    return (
        <>
            <div className={Trendingcardcss.cardcont}>
                <div className={Trendingcardcss.imgcont}>
                    <Image src="/images/gulmarg.jpg" width={330} height={330} />
                </div>
                <div className={Trendingcardcss.desc}>
                    <a href=''> South India hill stations will welcome you warmly with cool embrace and aromatic fragrance. </a>
                </div>

            </div>
        </>
    )
}