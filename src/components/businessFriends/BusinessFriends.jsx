import React, {useRef, useMemo} from 'react';
import interin from '../../assets/img/interin.jpg';
import c1 from '../../assets/img/1c.png';

import './businessFriends.css';

const BusinessFriends = ({event}) => {

    const business = useRef();

    useMemo(() => {
        const text = event && event.target.innerHTML;
        if (text === 'Бизнес-партнеры') {
            business.current.scrollIntoView({behavior: 'smooth'});
        };
    }, [event.timeStamp] );

    return (
        <div>
            <div className="fonBusiness"></div>
            <div className="container">
                <div ref={business} className="businessTitle">Бизнес-партнеры:</div>
                <div className="partners">
                    <div className="block1c">
                        <div className="namePartner">Официальный партнер 1С</div>
                        <img src={c1} alt="1c" className="img1c"/>
                    </div>
                    <div className="blockInterin">
                        <div className="namePartner">Медицинские информационные системы группы компаний Интерин</div>
                        <img src={interin} alt="interin" className="imgInterin"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessFriends;