import React from 'react';
import { Grid, Cell } from 'react-mdl';
import myself from "./ubeydullah.png"

class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='home-grid'>
                    <Cell col={12}>
                        <img src={myself} alt="profile" className="profile-img"/>
                        <div className="banner-text">
                            <h1>Front-End Web Developer</h1>
                            <hr/>
                            <p>Expert in | HTMl | CSS | JavaScript | React</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/"  rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook-square" aria-hidden="true"/>
                                </a>
                                <a href="https://twitter.com/home/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-twitter-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.linkedin.com/in/ubeydullah-abdiweli-406005163/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"/> 
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}




export default Home;