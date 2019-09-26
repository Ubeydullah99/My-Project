import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Ubeyd from './ubeydullah.png'
class Contact extends React.Component {
    render() {
        return (
            <div className="contact-info">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3 style={{ fontFamily: 'fantasy' }}>Ubeydullah Abdiweli</h3>
                        <img src={Ubeyd}
                            alt="ubeyd-img" style={{ height: '300px', width: '250px' }} />
                        <p style={{ width: '60%', color: 'rgb(97, 218, 251)', margin: 'auto' }}>
                            Front-end developer who studied Html, CSS, Javascript and React from ComIT
                           </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Hella me at</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'20px', fontFamily:'oxygen'}}>
                                       Email: Ubeydullahi114@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'20px', fontFamily:'oxygen'}}>
                                        Phone: +1 (204)- 770- 3241
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'20px', fontFamily:'oxygen'}}>
                                        Address: 600 Shaftbury Winnipeg Canada
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )

    }
}
export default Contact;