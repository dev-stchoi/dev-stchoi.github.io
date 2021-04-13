import React from 'react';
import { Carousel, Card, Typography } from 'antd';
import PropTypes from 'prop-types';
import './CardCarousel.css';

const CardCarousel = props => {
  const { list } = props;
  const { Text } = Typography;

  return (
    // <div className="carousel">
    // <div className="carousel_siz">
    <Carousel autoplay>
      {list.length > 0 &&
        list.map(card => (
          <div>
            <Card
              title={card.name}
              bordered={false}
              hoverable
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
    // </div>
    // </div>
  );
};

CardCarousel.propTypes = {
  // title: PropTypes.objectOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};
export default CardCarousel;
