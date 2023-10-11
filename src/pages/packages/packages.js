import Container from '@/components/container/card';
import packagescss from './packages.module.scss';
import Packagecard from '@/components/packagecard/packagecard';
export default function Packages() {
    return (
        <>
            <div className={packagescss.packagescontainer}>
              <Container />
              {/* <Packagecard />
              <Packagecard />
              <Packagecard />
              <Packagecard />
              <Packagecard /> */}
            </div>
            
        </>
    )
}