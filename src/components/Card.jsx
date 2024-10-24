import { useEffect } from "react";
import { useState } from "react";

const Card = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards)
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {cards.map(card => (
                    <div key={card.player_id} className="card bg-base-100  shadow-xl">
                        <figure className="px-8 pt-6">
                            <img className="w-9/12 md:h-52 rounded-lg"
                                src={card.player_img}
                                alt="players" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"> <i className="fa-solid fa-user"></i> {card.player_name}</h2>
                            <div className="flex justify-between text-gray-400">
                                <p> <i className="fa-solid fa-flag"></i> {card.player_country}</p>
                                <button className="btn">{card.player_role}</button>

                            </div>
                            <p className="border border-b-1 mt-3"></p>
                            <h1 className="font-extrabold">Rating</h1>
                            <div className="flex justify-evenly">
                                <p className="font-medium">{card.player_batting_bowling_type}</p>
                                <p className="text-gray-300 ml-24">{card.player_batting_bowling_type}</p>

                            </div>
                            <div className="flex justify-between mt-5">
                                <h1 className="font-medium text-xl">Price :{card.player_bidding_price}</h1>
                                <button className="btn ">Choose Player</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Card;