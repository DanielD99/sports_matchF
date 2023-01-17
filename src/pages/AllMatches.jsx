import React, {useEffect, useState} from 'react'
import facade from '../facades/apiFacade'

const AllMatches = () => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const fetchMatches = async () => {
            const matches = await facade.getAllMatches()
            console.log(matches)
            setMatches(matches)
        }
        fetchMatches()
    }, [])

  return (
    <div>
      {matches ? <>
        <thead>
        <tr>  
                    <th>Id</th> 
                    <th>Opponent Team</th>
                    <th>Judge</th>
                    <th>Type</th>
                    <th>Indoors?</th>
                    <th>Location</th>
                    <th>Players</th>
                    
                </tr>
                </thead>
        {matches.map(match => (
            <tr>
                <td>{match.id}</td>
                <td>{match.opponentTeam}</td>
                <td>{match.judge}</td>
                <td>{match.type}</td>
                <td>{match.inDoors == 0 ? "No" : "Yes"}</td>
                <td>{match.location.address}, 
                {match.location.city}, 
                {match.location.weather}
                </td>
                <td>{match?.players.map(player => (<>
                    <p>Player: {player?.id}, name: {player?.name}, phone: {player?.phone}, email: {player?.email}, status: {player?.status}</p>
                </>))}</td>
            </tr>
            
        ))}
      </>
       : <p>No matches found for now...</p>}
    </div>
  )
}

export default AllMatches
