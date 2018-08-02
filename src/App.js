import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TerminalHeader from './components/TerminalHeader';

class App extends Component {
    render() {
        return (
            <div className="terminal">
                <TerminalHeader/>
                <div className="terminal_body">
                    <Header/>
                    <pre>
➜  ~ lsb_release --all
Distributor ID:	Ubuntu
Description:	Ubuntu 16.04.5 LTS
Release:	16.04
Codename:	xenial

➜  ~ lscpu
Architecture:   x86_64
CPU(s):         4
Vendor ID:      GenuineIntel
Model name:     Intel(R) Core(TM) i7-4600M CPU @ 2.90GHz

➜  ~ python3 --version
Python 3.5.2

➜  ~ python --version
Python 2.7.12

➜  ~ java -version
openjdk version "9-internal"
OpenJDK Runtime Environment (build 9-internal+0-2016-04-14-195246.buildd.src)
OpenJDK 64-Bit Server VM (build 9-internal+0-2016-04-14-195246.buildd.src, mixed mode)

➜  ~ git --version
git version 2.7.4

➜  ~ gcc --version
gcc (Ubuntu 5.4.0-6ubuntu1~16.04.10) 5.4.0 20160609
              </pre>
                </div>
            </div>
        );
    }
}

export default App;
