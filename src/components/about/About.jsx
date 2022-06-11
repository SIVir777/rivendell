import React, { useRef, useMemo } from 'react';

import './about.css';

const About = ({event}) => {

    const oNas = useRef();

    useMemo(() => {
        const text = event && event.target.innerHTML;
        if (text === 'О нас') {
            oNas.current.scrollIntoView({behavior: 'smooth'});
        };
    }, [event.timeStamp] );

    return (
        <div className="container">
            <div ref={oNas} className="aboutTitle">О нас:</div>
            <div className="blockTextONas">
                <div className="punctText">
                    <div className="tochka"></div>
                    <p>
                        Оказываем широкий спектр услуг 
                        для модернизации и сопровождения 
                        информационных систем
                    </p>
                </div>
                <div className="punctText">
                    <div className="tochka"></div>
                    <p>
                        Мы готовы обеспечить 
                        надежную поддержку существующих 
                        и перспективных задач бизнеса, 
                        повысить эффективность деятельности, 
                        производительность и внедрить 
                        современные информационные технологии.
                    </p>
                </div>
                <div className="punctText">
                    <div className="tochka"></div>
                    <p>
                        Мы обладаем компетенциями в 
                        сфере медицины, документооборота, 
                        делопроизводства,  инфраструктуры, 
                        а также в других профессиональных 
                        областях.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;