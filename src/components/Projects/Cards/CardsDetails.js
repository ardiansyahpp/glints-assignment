import { useState, useEffect } from "react";

const CardsDetail = ({match}) => {

    useEffect(() =>{
        fetchCocktail() // eslint-disable-next-line
    },[])

    const [item, setItem] = useState([])

    const fetchCocktail = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
        const item = await response.json()
        setItem(item.drinks[0])
        console.log(item);
    }

    return (
        <div className="detail">
            <h1>{item.strDrink}</h1> 
            <img src={item.strDrinkThumb} alt="testpics" className='detail-cocktail-image'/>
        </div>
    );
}

export default CardsDetail;