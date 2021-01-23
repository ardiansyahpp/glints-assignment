import './Cards.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Cards = ({name, image, id}) => {

    const [change, setChange] = useState(false)

    const handleClick = () => {
        setChange(!change)
    }

    return (
        <div className={change ? 'cards' : 'cards-onchange'} onClick={handleClick}>
            <h2 className='cards-title'>{ name }</h2>
            <img src={image} alt="picscocktail" className='cards-image'/>
            <Link to={`/cards/${id}`}><p>View More</p></Link>
        </div>
    );
}

export default Cards;