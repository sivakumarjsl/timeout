import React from 'react';

export const DashboardPage = (props) => {

    const title = 'Timeout'

    console.log(props)

    if(props.isIdleTimeOut) {
        props.history.push('/')
    }
    
    return (
        <div className="container mgntop">      
           <h1>your session end within 5 seconds</h1>
        </div>
    )
}