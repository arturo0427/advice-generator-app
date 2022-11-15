import { useEffect, useState } from "react";
import dice from "../assets/icon-dice.svg";
import dividerDesktop from "./../assets/pattern-divider-desktop.svg";
import dividerMobile from "./../assets/pattern-divider-mobile.svg";

import "./styles/cardStyle.css";


export const Card = () => {

    const [advice, setAdvice] = useState([]);

    const onAdviceGenerator = async () => {
        const url = await `https://api.adviceslip.com/advice`;
        const resp = await fetch(url);
        const { slip } = await resp.json();
        setAdvice(slip);
    }

    useEffect(() => {
        onAdviceGenerator();
    }, [])


    return (
        <div className='card'>
            <div className="card__content">
                <span>ADVICE #{advice.id}</span>
                <p>{advice.advice}</p>
                <picture className="card__content__divider">
                    <source media="(min-width: 768px)" srcSet={dividerDesktop} />
                    <img src={dividerMobile} alt="Divider" />
                </picture>
                <button
                    className="card__content__button"
                    onClick={onAdviceGenerator}
                >
                    <img src={dice} alt="Icon" />
                </button>
            </div>
        </div>
    )
}
