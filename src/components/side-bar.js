import React from 'react';

const Sidebar = () => {
    return (
            <nav className="navbar navbar-default sidebar" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home
                                <span
                                    style={{'font-size':'16px;'}}
                                    className="pull-right hidden-xs showopacity glyphicon glyphicon-home">

                            </span>
                            </a>
                        </li>
                        <li ><a href="#">Section 1<span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span></a></li>
                        <li ><a href="#">Section 2 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></a></li>
                        <li ><a href="#">Section 3 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-film"></span></a></li>
                        <li ><a href="#">Section 4 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-trash"></span></a></li>
                        <li ><a href="#">Section 5 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-apple"></span></a></li>
                        <li ><a href="#">Section 6 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-xbt"></span></a></li>
                        <li ><a href="#">Section 7 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-hourglass"></span></a></li>
                        <li ><a href="#">Section 8 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-floppy-open"></span></a></li>
                        <li ><a href="#">Section 9 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-collapse-up"></span></a></li>
                        <li ><a href="#">Section 10 <span style={{'font-size':'16px;'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-floppy-heart-empty"></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;