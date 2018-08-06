import React, {Component} from 'react';
import TableRow from './TableRow';

class TableComponent extends Component{
    render(){
        return(
            <table>
                {
                    this.props.rows.map((cells, index)=>{
                        return(<TableRow cells={cells} key={index}/>);
                    })
                }
            </table>
        )
    }
}

export default TableComponent;