import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Contributor = () => {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetchData() // eslint-disable-next-line
    },[])

    const fetchData = async() => {
        const response = await fetch(`https://reqres.in/api/users?page=2`)
        const data = await response.json()
        setUsers(data.data)
    }

    return (
        <div className="contributor">
            {users.map(user => (
                <div className="contributor-list" key={user.id}>
                    <img src={user.avatar} alt="contripic"/>
                    <p>{user.first_name} {user.last_name}</p>
                    <Link to={`/contributor-detail/${user.id}`}>
                    <p>Contributor Detail</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Contributor;