import * as React from 'react';

const AboutMe = () => {
    return (
            <div style={{
                display: 'left',
                padding: '20px',
                paddingTop: '30px',
                paddingBottom: '60px',
                fontSize: '20px',
                flexDirection: 'column',
                color: '#f2f2f2',
                paddingLeft: '180px',
            }}>
                <h2 style={{maxWidth: '600px'}}>Sobre Mim</h2>
                <p style={{ paddingTop:'20px', maxWidth: '600px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ad commodi consequuntur, quibusdam ratione consequatur debitis molestias nulla voluptate, sit neque voluptatum ipsum cupiditate, repellendus quo totam quia fugiat blanditiis.</p>
            </div>
    )
}

export default AboutMe;