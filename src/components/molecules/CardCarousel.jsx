import React from 'react';
import { Carousel, Card, Typography } from 'antd';
import './CardCarousel.css';

const CardCarousel = props => {
  const { list } = props;
  const { Text } = Typography;

  return (
    <Carousel autoplay>
      {list.length > 0 &&
        list.map((card, idx) => (
          <div key={`carousel-data-${idx}`}>
            <Card
              title={card.name}
              bordered={false}
              headStyle={{ fontWeight: 'bold' }}
              className="contentStyle"
            >
              <div className="textStyle">
                <Text strong>기간 : {card.date}</Text>
                <br />
                <Text strong>업무 : {card.role}</Text>
                <br />
                <Text strong>Frameworks : {card.skill.frameworks}</Text>
                <br />
                <Text strong>Tool : {card.skill.tool}</Text>
                <br />
                <Text strong>Language : {card.skill.language}</Text>
              </div>
            </Card>
          </div>
        ))}
    </Carousel>
  );
};

export default CardCarousel;
