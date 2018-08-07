import React, {Component} from 'react';
import TableRow from './TableRow';

class TableComponent extends Component{
    render(){
        return(
            <table>
                <tbody>
                {
                    this.props.rows.map((cells, index)=>{
                        return(<TableRow cells={cells} key={index}/>);
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default TableComponent;