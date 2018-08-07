import React, {Component} from 'react';

class TableRow extends Component{
    render(){
        return(
            <tr>
                {this.props.cells.map((cell, index)=>{
                    return (<td key={index}>{cell}</td>);
                })}
            </tr>
        )
    }
}

export default TableRow;
