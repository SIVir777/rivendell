import React, {useRef, useMemo} from 'react';

import './ourProjects.css';
import logoTranzit from '../../assets/img/tranzit.png';
import logoRjd from '../../assets/img/rjd.png';
import logoRutMiit from '../../assets/img/rut_miit.png';

const OurProjects = ({event}) => {

    const oprojects = useRef();

    useMemo( () => {
        const text = event && event.target.innerHTML;
        if (text === 'Наши проекты') {
            oprojects.current.scrollIntoView({behavior: 'smooth'});
        };
    }, [event.timeStamp] );

    return (
        <div>
            <div className="fonCity"></div>
            <div className="container">
                <div ref={oprojects} className="titleProjects">Наши проекты:</div>
                <div className="projects">
                    <div className="project">
                        <div className="textProject">
                            Разработка системы автоматического 
                            бронирования места в очереди для Транспортно
                             - логистической компании Транзит 
                        </div>
                        <img src={logoTranzit} alt="Tranzit" className="TranzitLogo logoc"/>
                    </div>
                    <div className="project">
                        <div className="textProject">
                            IT Консалтинг и автоматизация 
                            Поликлиники РУТ МИИТ
                        </div>
                        <img src={logoRutMiit} alt="RutMiit" className="RutMiitLogo logoc"/>
                    </div>
                    <div className="project">
                        <div className="textProject">
                            Разработка интеграционных решений 
                            для медицинских учреждений РЖД
                        </div>
                        <img src={logoRjd} alt="Rjd" className="RjdLogo logoc"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;