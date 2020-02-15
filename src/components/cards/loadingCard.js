import React from 'react';
import {  Card, Avatar } from 'antd';

const { Meta } = Card;

const LoadingCard = () => {
  return (
  	<>
    <Card style={{ width: 300, marginTop: 16 }} loading>
          <Meta
            avatar={
              <Avatar src="" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

    <Card style={{ width: 300, marginTop: 16 }} loading>
          <Meta
            avatar={
              <Avatar src="" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card style={{ width: 300, marginTop: 16 }} loading>
          <Meta
            avatar={
              <Avatar src="" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
        </>
  )
}

export default LoadingCard;