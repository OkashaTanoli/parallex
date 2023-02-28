import React from 'react';
import './App.css';
import Parallax from './components/parallax/parallax';
import Img from './assets/single-portfolio1.jpg'
import Img2 from './assets/single-portfolio2.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';


function Child1({pos}: any) {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: pos === 'l' ? '10%':'',right: pos === 'r' ? '10%':'', width: '500px', transform: 'translateY(-50%)' }}>
                <h1 style={{ color: 'white', fontSize: '60px', fontFamily: 'sans-serif' }}>Creative <span style={{ fontWeight: 200 }}>Studio</span></h1>
                <p style={{ color: 'white', marginTop: '-20px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolorum nobis accusamus explicabo voluptas maiores expedita fugit, ducimus quisquam vero quas a labore reiciendis odio nemo provident doloribus sunt facere.</p>
                <button style={{ color: 'white', backgroundColor: 'transparent', padding: '15px 35px', borderRadius: '100px', border: '2px solid white' }}>Learn More</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <ParallaxProvider>
                <Parallax Img={Img}>
                    <Child1 pos={'l'} />
                </Parallax>
                <Parallax Img={Img2}>
                    <Child1 pos={'r'} />
                </Parallax>
                <Parallax Img={Img}>
                    <Child1 pos={'l'} />
                </Parallax>
                <Parallax Img={Img2}>
                    <Child1 pos={'r'} />
                </Parallax>
            </ParallaxProvider>
        </div>
    );
}

export default App;
