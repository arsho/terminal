import React, { Component } from 'react';
import './App.css';
import TerminalHeader from './components/TerminalHeader';
import TerminaBody from './components/TerminalBody';
class App extends Component {
    render() {
        return (
            <div className="terminal">
                <TerminalHeader/>
                <TerminaBody/>
            </div>
        );
    }
}

export default App;
