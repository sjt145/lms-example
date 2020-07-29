import React from 'react';

import Button from './Button'

const SecondayButton = ({ text ,onClick}) => {
  return <Button variant="secondary" text={text} className="ml-4" onClick={onClick}/>
}

export default SecondayButton;