import React from 'react';
import {Grid, Cell} from 'react-mdl';
import ResImg from './ubeydullah.png';

class Resume extends React.Component{
   render(){
       return(
           <div>
             <Grid>
               <Cell col={4}>
                 <div className="resume-left">
                   <img src={ResImg} alt="resume-img" 
                   style={{height:'250px'}}
                   />
                   <h2>Ubeydullah's Resume</h2>
                   <h4>(**React Developer**)</h4>
                 </div>
               </Cell>
               <Cell className="resume-right" col={8}>right side</Cell>
              </Grid> 
           </div>
       )

   } 
}
export default Resume;