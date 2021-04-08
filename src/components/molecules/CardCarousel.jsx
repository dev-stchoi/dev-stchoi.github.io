import React from 'react';
import { Carousel, Card } from 'antd';
import PropTypes from 'prop-types';
import './CardCarousel.css';

const CardCarousel = props => {
  console.log('여기는 CardCarousel component');
  const { list } = props;

  console.log('list:::', list);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <Carousel autoplay style={{ height: '50vh', background: '#364d79' }}>
        {list.length > 0 &&
          list.map(card => (
            <div>
              <Card title={card.name} bordered={false} style={{ width: 500 }}>
                <p>{card.date}</p>
                <p>{card.skill.frameworks}</p>
                <p>{card.skill.tool}</p>
                <p>{card.skill.language}</p>
              </Card>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

CardCarousel.propTypes = {
  // title: PropTypes.objectOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};
export default CardCarousel;
