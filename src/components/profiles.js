import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

import LoadingCard from './cards/loadingCard';
import CharacterCard from './cards/characterCard';
import '../styles/profiles.css';

/**
 *@function Profiles {none}
 *@returns profile of all characters and updates each character on page click
 */

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false)


  useEffect(() => {
    const getAllCharacters = async () => {
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        let data = response.data.results;

        setProfiles(data)
      } catch (e) {
        setError(true)
      }

    }
    getAllCharacters()
  }, [page])

  const onChange = (page) => {

    setPage(page)
  }

  if (!profiles.length && !error) {
    return (
      <div className="profiles-container" data-testid="loading">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    )
  }

  if (!profiles.length && error) {
    return (
      <p>Error occured please refresh</p>
    )
  }
  return (
    <>

      <div className="profiles-container" data-testid="character-cards">

        {profiles.map(profile =>

          <Link to={"/profile/" + profile.id} key={profile.id}>
            <CharacterCard
              name={profile.name}
              gender={profile.gender}
              image={profile.image}
              specie={profile.species}
              origin={profile.origin.name}
              status={profile.status}
            />

          </Link>
        )}
      </div>
      <Pagination defaultCurrent={1} onChange={onChange} total={250} style={{ textAlign: 'center', marginTop: 50 }} />
    </>

  )
}

export default Profiles;