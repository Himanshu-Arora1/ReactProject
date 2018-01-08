import React, {Component} from 'react';
import Steps from './Steps'
import StoredData from './storeddata'
import Sidebar from './side-bar';
import Datasection from './data-section';

const MainContainer = () => {
    return (
        <div>
            <Sidebar/>
            <div className="container">
                <Datasection/>
            </div>
        </div>
    );
}

export default MainContainer;