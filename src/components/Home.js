import React from 'react';

import AppNavbar from './AppNavbar';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <AppNavbar/>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;