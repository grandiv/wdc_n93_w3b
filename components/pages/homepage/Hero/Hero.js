import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Hero() {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer offset={0} speed={0.8}>
        <div className="animation_layer parallax bg-[url('/img/homepage/hero/5.svg')]" id="5"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax bg-[url('/img/homepage/hero/4.svg')]" id="4"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
        <div className="animation_layer parallax bg-[url('/img/homepage/hero/3.svg')]" id="3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax bg-[url('/img/homepage/hero/2.svg')]" id="2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div className="animation_layer parallax bg-[url('/img/homepage/hero/1.svg')]" id="1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <div className="animation_layer parallax bg-[1d1d21] w-[238px]" id="1"></div>
      </ParallaxLayer>
    </Parallax>

  )
}

export default Hero