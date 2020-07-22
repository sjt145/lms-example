import React from 'react';

import Button from './Button'

const OutlineButton = ({ text, onClick }) => {
  return <Button variant="outline-light" text={text} onClick={onClick} />
}

export default OutlineButton;