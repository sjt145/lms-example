import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
const TableWrap = ({ tableHeads, tableRows, onClick, key }) => {
    return <table class="table table-striped">
        <thead>
            <tr>
                {(tableHeads || []).map(tableheads => {
                    return <th>{tableheads}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {(tableRows || []).map((tablerows) => {
                return <tr>
                    {Object.values(tablerows).map((value) => {
                        // console.log(value)
                        return <td>{value}</td>;
                    })}
                    <td><PrimaryButton text='Edit' onClick={() => onClick(tablerows)} /></td>
                </tr>
            })}
        </tbody>
    </table>
}
export default TableWrap