import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ContributorDetail = ({match}) => {

    const [user, setUser] = useState({})

    const prevID = user.id === 1 ? 12 : user.id - 1;
    const nextID = user.id === 12 ? user.id : user.id + 1;

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() =>{
        const response = await fetch(`https://reqres.in/api/users/${match.params.id}`)
        const data = await response.json()
        setUser(data.data)
    }

    return (
        <div>
            <div>
                <img src={user.avatar} alt='picsfree'/>
                <p>Email: {user.email}</p>
                <p>{user.first_name} {user.last_name}</p>
            </div>
            <Link to={`/contributor-detail/${nextID}`}>Next</Link>
            <Link to={`/contributor-detail/${prevID}`}>Prev</Link>
        </div>
    );
}

export default ContributorDetail;