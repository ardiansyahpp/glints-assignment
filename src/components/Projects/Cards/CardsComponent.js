import { useState, useEffect } from "react";
import Cards from "./Cards";
import './Cards.css'

const CardsComponent = () => {

    const [cards, setCards] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('margarita')

    useEffect(() => {
    fetchingData(); // eslint-disable-next-line
    },[query])

    const fetchingData = async() => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        setCards(data.drinks)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search);
    }

    const updateQuery = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className="cards-component">
            <form value={query} onSubmit={updateQuery} className='cocktail-form'>
                <input type="text" value={search} onChange={updateSearch} className='cocktail-searchbar'/>
                <button className='cocktail-btn'>Search</button>
            </form>
            <div className='cocktails-cards'>
            {cards.map(card => (
                <Cards
                key={card.idDrink}
                id={card.idDrink}
                name={card.strDrink}
                image={card.strDrinkThumb}/>
            ))}
        </div>
        </div>
    );
}

export default CardsComponent;