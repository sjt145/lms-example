import React, { useState } from 'react';

import { InputGroup, FormControl, DropdownButton, Dropdown } from '../BootstrapWrap';

const DropdownWrap = ({ name, title, options, setSelectedValue, onChange }) => {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(e.target.innerText);
    setSelectedValue && setSelectedValue(Number(e.target.id));
    onChange(e.target.name, Number(e.target.id));
  }

  return <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={title}
      id="input-group-dropdown-1"
    >
      {
        (options || []).map(option => {
          return <Dropdown.Item name={name} href="#" onClick={(e) => handleClick(e)} id={option.id}> {option.name}</Dropdown.Item>
        })
      }
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={value} />
  </InputGroup >
}

export default DropdownWrap;