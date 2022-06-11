import React, {useRef, useMemo} from 'react';

import './contact.css';

const Contact = ({event}) => {

    const cont = useRef();

    useMemo(() => {
        const text = event && event.target.innerHTML;
        if (text === 'Контакты') {
            cont.current.scrollIntoView({behavior: 'smooth'});
        };
    }, [event.timeStamp] );

    return (
        <div ref={cont} className="fonFooter">
            <div className="container">
                <div className="menuContact">
                    <div className="textContact">Контакты: </div>
                    <div className="blockCon">
                        <div className="obTel">
                            <a href="tel:+79295476552" className="tel">+7 929 547 6552</a>
                        </div>
                        <div className="email">ssvetlanarivendell@gmail.com</div>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Contact;