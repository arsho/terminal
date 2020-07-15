import React, {Component} from 'react';

class TerminalMenu extends Component{
    render(){
        return (
            <div className="topnav">
                <div className="dropdown">
                    <button className="dropbtn">File</button>
                    <div className="dropdown-content">
                        <a href="#">New Tab</a>
                        <a href="#">New Tab</a>
                        <a href="#">Close Tab</a>
                        <a href="#">Close Window</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Edit</button>
                    <div className="dropdown-content">
                        <a href="#">Copy</a>
                        <a href="#">Paste</a>
                        <a href="#">Paste Special</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">View</button>
                    <div className="dropdown-content">
                        <a href="#">Blogs</a>
                        <a href="#">Snippets</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Terminal</button>
                    <div className="dropdown-content">
                        <a href="#">Ubuntu</a>
                        <a href="#">Mac</a>
                        <a href="#">Windows</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">About</button>
                    <div className="dropdown-content">
                        <a href="#">CV</a>
                        <a href="#">Links</a>
                        <a href="#">About terminal</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TerminalMenu;
