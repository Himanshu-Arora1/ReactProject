import React, {Component} from 'react';
import Steps from './Steps'
import StoredData from './storeddata'
import Sidebar from './side-bar';

const MainContainer = () => {
    return (
        <div>
            <Sidebar/>
            <Steps />
            <StoredData />

        </div>
    );
}

export default MainContainer;