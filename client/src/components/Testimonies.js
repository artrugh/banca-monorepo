import React, { useRef, useState, useEffect } from 'react';

// custom hook to get the scrollPosition
import { useScrollPosition } from './../helpers/customHooks';

import { v4 as uuidv4 } from "uuid";
import { imageEncode } from './../helpers/helpers';

//components
import Loading from './Loading';

export default function Testimonies({ testimonies }) {

    // index of the image that is showed
    const [index, setIndex] = useState();
    // set if the testimony slider should be on or off
    const [slider, setSlider] = useState(false);
    //UIdata
    // const testimonies = data.testimonies;
    // set the ref of the DOM to get the top and bottom
    const testimoniesRef = useRef(null);

    useScrollPosition(({ prevPos, currPos }) => {
        // set the top and the bottom of the component
        let top = testimoniesRef.current.offsetTop - 100;
        let bottom = testimoniesRef.current.offsetTop + testimoniesRef.current.offsetHeight - 400;
        // is the component into the area of the screen?
        setSlider(Math.abs(currPos.y) > top && Math.abs(currPos.y) < bottom);
    })

    useEffect(function checkTest() {

        // if the component is into the area of the screen, show it.        
        if (testimonies && slider) {
            const interval = setInterval(() => {
                setIndex(index < testimonies.length - 1 ? index + 1 : 0);
                console.log("The slider is ON");
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [slider, index, testimonies]);

    if (testimonies) return (

        <div
            ref={testimoniesRef}
            id="testimony-container">
            <div id="testimony-intro">
                <p>Su futura <span>propiedad</span></p>
                <p>es nuestra misión,</p>
                <p>su <span>confianza</span></p>
                <p>nuestra mayor recompensa.</p>
            </div>
            <main>
                {testimonies.map((testimony, idx) =>
                    <div
                        key={uuidv4()}
                        style={{
                            display: index === idx ? "flex" : "none",
                        }}
                        className={`testimony`}>
                        <img
                            alt={testimony.name}
                            className="testimony-img"
                            key={uuidv4()}
                            src={imageEncode(testimony.img.data)}
                        // src={require(`./../assets/testimony/${testimony.img}.png`)}
                        >
                        </img>
                        <p
                            key={uuidv4()}
                            className="testimony-description">
                            {testimony.statement}
                        </p>
                        <p
                            key={uuidv4()}
                            className="testimony-name">
                            {testimony.name}
                        </p>
                    </div>
                )
                }
            </main>
        </div >
    )
    else {
        return <Loading />
    }
}
