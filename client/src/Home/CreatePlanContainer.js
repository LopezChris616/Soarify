import React from 'react';
import { Row } from 'reactstrap';
import CreateAPlan from './CreateAPlan';

const CreatePlanContainer = () => {
  const createPlanInfo = [
    { title: 'Stay Organized',
      image: 'https://images.unsplash.com/photo-1494380523890-2c3c1a3ea750?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58e1a210219d647e7d409138ddb7bf2f&auto=format&fit=crop&w=1651&q=80',
      body: 'Our straight to the point planning system gives you everything you need to ensure that you plan your trip the way you want to!',
      alt: 'man relaxing on beach',
      id: 1 },
    { title: 'Current Features',
      image: 'https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-0.3.5&s=f76b99a0dc2aa16bf7dec2bfcf3edede&auto=format&fit=crop&w=1650&q=80',
      body: 'Currently, each plan includes location, start date, cost, amount of money saved, priority, and purpose.',
      alt: 'woman looking at the view from the top of a mountain',
      id: 2 },
    { title: 'Always Looking To Improve',
      image: 'https://images.unsplash.com/photo-1519659675643-e5885721661f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da8dd6e70d17bd7be1c76cff7c3ac5e&auto=format&fit=crop&w=1650&q=80',
      body: 'We are currently looking to add additional features to make this experience as rich and fulfilling as possible!',
      alt: 'snowboarders on a snow-filled mountain',
      id: 3 },
  ];

  const createPlanDisplay = createPlanInfo.map(section => (
    <CreateAPlan
      title={section.title}
      image={section.image}
      body={section.body}
      alt={section.alt}
      key={section.id}
    />
  ));


  return (
    <Row style={{ textAlign: 'center' }}>
      {createPlanDisplay}
    </Row>
  );
};

export default CreatePlanContainer;
