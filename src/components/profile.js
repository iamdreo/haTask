import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEmpty } from '../helpers/utils';
import '../styles/profile.css';

/**
 *@function Profile {match} - takes match prop which displays the id of the current view
 *@returns individual character information of any character that exists in the api
 */

const Profile = ({ match }) => {
  const [profileData, setProfileData] = useState({})
  const [locationInfo, setLocationInfo] = useState({})
  const [chapters, setChapters] = useState([]);
  const [error, setError] = useState("");




  useEffect(() => {
    const getCharacter = async () => {
      try {

        let response = await axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`);
        let locationInfo = await axios.get(response.data.location.url);
        let linksArr = response.data.episode
        let promiseArray = linksArr.map(url => axios.get(url));
        let episodes = await Promise.all(promiseArray).then(response => setChapters(response))

        let characterData = response.data;
        let locationInfoData = locationInfo.data

        setProfileData(characterData)
        setLocationInfo(locationInfoData)

      } catch (e) {
        setError("Network Error")
      }


    }

    getCharacter()
  }, [match.params.id])

  if (isEmpty(profileData)) return <div><p>{error ? error : null}</p> <p>no profile to display</p></div>

  return (
    <div className="profile-container">


      <img style={{ height: 150, width: 150, borderRadius: '50%' }} src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="avatar" />

      <h2 >{profileData.name}</h2>

      <h2>Character Information</h2>
      <ul>

        <li>Character specie : {profileData.species} </li>
        <li>Character type : {profileData.type}</li>
        <li>Character Gender: {profileData.gender}</li>
        <li>Character Status : {profileData.status}</li>
      </ul>
      <h2>Character Origin and location info</h2>
      {!isEmpty(locationInfo) ?
        (<ul>
          <li>Character Origin: {locationInfo.name}</li>
          <li>Character Dimension : {locationInfo.dimension} </li>
          <li>Amount of Residents : {locationInfo.residents.length} </li>
          <li>Location type: {locationInfo.type} </li>
        </ul>) : <p>loading location info...</p>}

      <h2 >Name of chapters character is featured on</h2>
      <ul>
        {chapters.length ? chapters.map((chapter) =>
          <li key={chapter.data.id} >Chapter No: {chapter.data.id} - Chapter Name : {chapter.data.name}</li>
        ) : <p>loading chapter info...</p>}
      </ul>

    </div>
  )
}

export default Profile;