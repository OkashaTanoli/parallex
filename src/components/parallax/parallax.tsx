import { ParallaxBanner } from 'react-scroll-parallax'

function ParallaxComp({ Img, children }: any) {


    return (
        <ParallaxBanner
            layers={[
                {
                    image: Img,
                    speed: -55,
                    expanded: false,
                    scale: [1, 1.1],
                },
            ]}
            style={{ height: '100vh' }} >
                {children}
        </ParallaxBanner>
    );
}

export default ParallaxComp;