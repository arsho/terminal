import React, {Component} from 'react';
import Command from './Command';


class PreviousCommands extends Component{
    render(){
        return(
            <div>
                {
                    this.props.data.map((command, index)=>{
                        return (<Command key={index} command={command}/>)
                    })
                }
            </div>
        );
    }
}

export default PreviousCommands;