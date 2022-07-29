import React from "react";
import Navbar from '../components/navbar';

const Tienlen = () => {
    return (
        <div>
            <Navbar />

            <div className="wrapper">
                <h1>Hello a Edric</h1>
                <p>Em thấy trang web a hay chơi Tiến Lên ko đẹp lắm cho nên em định tạo một trang web
                    tiến lên cho mn chơi!
                </p>

                <Game />
            </div>

        </div>
    );
};

function Game() {
    const cards = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return (
        <ul>
            {cards.map((cards) => (
                <li>{cards}</li>
            ))}
        </ul>
    );
}

export default Tienlen;