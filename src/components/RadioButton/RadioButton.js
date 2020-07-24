import React from 'react'
import { InputGroup } from '../BootstrapWrap';
const Radiobutton = ({ onclick }) => {
    return <div style={{ display: 'flex' ,alignItems:'center'}} className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
        </InputGroup.Prepend>
        <div class="form-check flex" style={{ marginLeft: '20px', marginRight: '20px' }}>
            <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={(val) => onclick(val.target.name, val.target.id)} />
            <label class="form-check-label" for="female">
                Female
            </label>
        </div>
        <div class="form-check" >
            <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={(val) => onclick(val.target.name, val.target.id)} />
            <label class="form-check-label" for="male">
                Male
            </label>
        </div>
    </div>
}

export default Radiobutton