import React from 'react';
import { Carousel, Card } from 'antd';
import PropTypes from 'prop-types';
import './CardCarousel.css';

const CardCarousel = props => {
  const { list } = props;

  const contentStyle = {
    // height: '40vh',
    // color: '#fff',
    // lineHeight: '160px',
    height: '100%',
    textAlign: 'center',
    // background: '#364d79',
    background: 'rgb(187, 184, 184)',
  };

  return (
    <div className="carousel">
      <div className="carousel_siz">
        <Carousel autoplay>
          {list.length > 0 &&
            list.map(card => (
              <div>
                <Card
                  title={card.name}
                  bordered={false}
                  className="contentStyle"
                >
                  <p>기간 : {card.date}</p>
                  <p>Frameworks : {card.skill.frameworks}</p>
                  <p>Tool : {card.skill.tool}</p>
                  <p>Language : {card.skill.language}</p>
                </Card>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
    // <Carousel autoplay>
    //   <div>
    //     <Card style={contentStyle}>test test test</Card>
    //   </div>
    //   <div>
    //     <Card style={contentStyle} title="test">
    //       test1 test1 test1
    //     </Card>
    //   </div>
    // </Carousel>
    // <div className="carousel" style={{ width: '700px' }}>
    //   <Carousel autoplay>
    //     {list.length > 0 &&
    //       list.map(card => (
    //         <div style={{ marginBottom: 50 }}>
    //           <Card
    //             title={card.name}
    //             bordered={false}
    //             style={{
    //               width: 700,
    //               // margin: '0 auto',
    //             }}
    //           >
    //             <p>기간 : {card.date}</p>
    //             <p>Frameworks : {card.skill.frameworks}</p>
    //             <p>Tool : {card.skill.tool}</p>
    //             <p>Language : {card.skill.language}</p>
    //           </Card>
    //         </div>
    //       ))}
    //   </Carousel>
    // </div>
  );
};

CardCarousel.propTypes = {
  // title: PropTypes.objectOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};
export default CardCarousel;
