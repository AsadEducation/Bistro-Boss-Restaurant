import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ title, subtitle, img }) => {
    return (


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
           
            <div
                class="hero min-h-[80vh]"
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5">
                            {subtitle}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;