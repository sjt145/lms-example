import React from 'react';

import Button from './Button'

const PrimaryButton = ({ text, onClick,disabled,type }) => {
  return <Button variant="primary" text={text} onClick={onClick} disabled={disabled} type={type}/>
}

export default PrimaryButton;