import { React, useState } from "react";
import Navbar from '../components/navbar';
import './tienlen.css'

const Tienlen = () => {
    return (
        <div>
            <Navbar />

            <div className="wrapper">

                <div className="tienlen">

                    <Game />

                    <p>Bạn có khi nào thua một ván Tiến Lên bởi vì bạn không nhớ những lá bài đã được chơi không?
                        Hãy yên tâm, Spicy sẽ giúp bạn nhớ!</p>

                </div>
            </div>

        </div>
    );
};

function Counter(card) {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        if (counter < 4) {
            setCounter(count => count + 1)
        }
    }

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1)
        }
    }

    return (
        <div className="cardButton">
            <button className="minusBox" onClick={decrease}>{'-'}</button>
            <p className="cardName"> {card} </p>
            <button className="plusBox" onClick={increase}>{'+'}</button>
            <p> {counter} </p>
        </div>
    )
}


function Game() {
    const cards = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];


    return (
        <div className="cardButtons">
            {cards.map((cards) => (
                <div>
                    {Counter(cards)}
                </div>
            ))}
        </div>
    );
}

export default Tienlen;