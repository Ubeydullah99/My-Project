import React, { Component } from 'react';
import HImage from './HTML5.png';
import CssImage from './css.jpg';
import JsImage from './js.png';
import RImage from './react.jpeg'
import { Tabs, Tab, Grid, Cell} from 'react-mdl';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="html-content">
            <h1>HTML Defination</h1>
            <img src={HImage} alt="Html-Img" className="Html5"/>
            <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
            <p>It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="css">
        <h1>What is CSS</h1>
        <img src={CssImage} alt="css-Img" className="css-img"/>
        <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).</p>
        <p>CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div  className="js">
        <h1>This is JavaScript</h1>
        <img src={JsImage} alt="js-icon" className="js-img"/>
        <p>JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser.</p>
        <p> JavaScript is designed to add interactivity and dynamic effects to the web pages by manipulating the content returned from a web server.</p>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="react-info">
            <h1>This is React</h1>
            <img src={RImage} alt="react-icon" className="react-img"/>
            <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
            <p> React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.</p>
        </div>
      )
    }
  }
  render() {
    return(
      <div className="projects-grid">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Html</Tab>
          <Tab>CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Project;