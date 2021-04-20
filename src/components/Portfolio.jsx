import React from 'react';
import CardCarousel from './molecules/CardCarousel';
import { Typography } from 'antd';
import './Portfolio.css';

const Portfolio = () => {
  const { Title } = Typography;
  const cardList = [
    {
      name: '한국예탁결제원 전자투표시스템',
      date: '2019-12-09 ~ 2020-12-07',
      role: '전자투표 행사, 전자투표 행사 철회, 통계, 배치, 인터페이스',
      skill: {
        frameworks: 'eGov Framework 3.8, React, swagger',
        tool: 'Eclipse, VSCode, Sql Developer, Oz Report, DA#, git(sourcetree)',
        language: 'Java, JavaScript, Oracle SQL',
      },
    },
    {
      name: 'PMS(Project Manager System) 개선',
      date: '2019-05-13 ~ 2019-06-14',
      role:
        '자사 프로그램 PMS 개선(타스크 관리, 결함관리, 결함등록 등 기능 개선)',
      skill: {
        frameworks: 'eGov Framework 3.5',
        tool: 'Eclipse, HeidiSQL',
        language: 'Java, JavaScript, JQuery, MariaDB',
      },
    },
    {
      name: '신용보증기금 차세대시스템 구축',
      date: '2017-08-14 ~ 2019-02-28',
      role:
        '신용보험 시스템 개발(보험접수, 계약변경/심사, to-do 배치, 잔액장 배치, 거래종료 배치 등)',
      skill: {
        frameworks: 'ProObject',
        tool: 'NexaCro, Sql Developer, toad, Oz Report, DA#, SVN, AnyLink',
        language: 'Java, JavaScript, Oracle SQL, DB2',
      },
    },
  ];

  return (
    <div className="carousel" id="p">
      <div>
        <Title style={{ color: 'white' }}>Project</Title>
      </div>
      <div className="carousel_siz">
        <CardCarousel list={cardList} />
      </div>
    </div>
  );
};

export default Portfolio;
