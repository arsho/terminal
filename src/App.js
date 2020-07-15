import React, { Component } from 'react';
import './App.css';
import TerminalHeader from './components/TerminalHeader';
import TerminalMenu from './components/TerminalMenu';
import TerminaBody from './components/TerminalBody';
class App extends Component {
    render() {
        return (
            <div className="terminal">
                <TerminalHeader/>
                <TerminalMenu/>
                <TerminaBody/>
            </div>
        );
    }
}

export default App;
