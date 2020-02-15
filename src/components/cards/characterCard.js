import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const CharacterCard = ({ name, gender, image, specie, origin, status }) => {
  return (

    <Card style={{ width: 300, marginTop: 16 }} >
      <Meta
        avatar={
          <Avatar src={image} />
        }
        title={name}
        description={`${gender} ${specie} who originated from ${origin}. Current status is ${status}`}
      />
    </Card>


  )
}

export default CharacterCard;