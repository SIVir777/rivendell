import React, {useRef, useMemo} from 'react';
import './services.css';

import castle from '../../assets/img/castle.png';

const Services = ({event}) => {

    const service = useRef();

    useMemo( () => {
        const text = event && event.target.innerHTML;
        if (text === 'Услуги') {
            service.current.scrollIntoView({behavior: 'smooth'});
        };
    }, [event.timeStamp] );

    return (
        <div>
            <div className="fonWaterfall"></div>
            <div className="container">
                <div ref={service} className="titleServices">Услуги</div>
                <div className="blockServices">
                    <div className="blockTextServices">
                        <div className="blockService">
                            <div className="tochka"></div>
                            <div className="textService">Прикладная разработка разной сложности</div>
                        </div>
                        <div className="blockService">
                            <div className="tochka"></div>
                            <div className="textService">Интеграционные задачи</div>
                        </div>
                        <div className="blockService">
                            <div className="tochka"></div>
                            <div className="textService">IT консалтинг</div>
                        </div>
                        <div className="blockService">
                            <div className="tochka"></div>
                            <div className="textService">Инфраструктурные решения</div>
                        </div>
                    </div>
                    <img src={castle} alt="castle" className="castle"/>
                </div>
            </div>
        </div>
    );
};

export default Services;