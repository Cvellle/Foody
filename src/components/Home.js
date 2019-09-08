import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Item from '../components/Item'
import SingleCategory from '../components/SingleCategory'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import headimg from '../images/himg.png';
import team from '../images/team.jpg';
import './css/home.css'
import ReactDom from 'react-dom'
import scrollTo from 'jquery';
import $ from 'jquery'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filtered: null,
      sent:false,
      about:false,
      contact:false
    }
  }

  componentDidMount() {
    document.getElementById('homeLink').style.display="none";
    document.getElementById('img').style.display="block";

    if(this.props.searchTrue) {this.refs.about.scrollIntoView({behavior: 'smooth'})}
    if(this.state.contact) {this.refs.contact.scrollIntoView({behavior: 'smooth'})}
  }

  saveMessage = e => {
    e.preventDefault();
    let fname = this.refs.fname.value;
    let lname = this.refs.lname.value;
    let mail = this.refs.mail.value;
    let msg = this.refs.msg.value;

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("mail", mail);
    localStorage.setItem("message", msg);

    this.setState({
      sent: true
    })
  }
  
  scroll() {
    this.refs.contact.scrollIntoView({behavior: 'smooth'})
  }

  render() {

    return (
      <div>

        <div className="headblock position-relative">
          <div className="d-md-flex justify-content-md-between" >
            <Col xs="12" sm="6" className="text-left align-self-center p-0">
              <div>
                <h1 className="align-self-center">Food Recipes</h1>
                <p className="align-self-center">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum<br/>
                  Loremlin ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br/>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem <br/>
                  ipsum Lorem ipsum Lorem ipsum 
                </p>
              </div>
            </Col>
            <Col xs="12" md="6">
              <img  xs="12" sm="6" src={headimg} className="d-sm-block d-flex justify-content-end"/>
            </Col>
          </div>          
          {/* <Link to={'/category'} className="align-self"> */}
            <button onClick={this.scroll} className="categoryBtn">
              Categories <span className="rotate d-inline-block">&rsaquo;</span>
            </button>
          {/* </Link> */}
        </div>
        
        <div className="categories" ref="categ">
          <Row>
              <Col xs="12" sm="3"><SingleCategory data="Beef" className=""/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Beef" className=""/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Chicken"/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Chicken"/></Col>
          </Row>
          <Row>
              <Col xs="12" sm="3"><SingleCategory data="Beef" className=""/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Beef" className=""/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Chicken"/></Col>
              <Col xs="12" sm="3"><SingleCategory data="Chicken"/></Col>
          </Row>
        </div>

        <div className="about" ref="about">
          <h2 className="text-md-left">About Us</h2>
          <div class="dash mx-auto mx-md-0"></div>
          <div class="d-md-flex justify-content-md-between">
            <div className="text-left abouttxt">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
            <div className="">
              <img src={team} className="d-flex justify-content-end team"/>
            </div>
          </div>
        </div>

        <div className="contact" ref="contact">
          <h2 className="text-center">Contact</h2>
          <div class="dash-cont d-block mx-auto"></div>
        </div>

        { 
          (this.state.sent) ? 
            <MesageSent/>
          :
          <div className="formHeight">
            <div className="contact d-flex justify-content-center">
              <form className="col-sm-4">
                <div className="form-group">
                  <input type="text" myRef="fname" ref="fname" className="form-control" id="fname" aria-describedby="emailHelp" placeholder="First name"/>
                </div>
                <div className="form-group">
                  <input type="text" ref="lname" className="form-control" id="lname" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                  <input type="text" ref="mail" className="form-control" id="mail" placeholder="Email"/>
                </div>
                <div className="form-group">
                <textarea className="form-control" ref="msg" id="messaage" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveMessage}>Send</button>
              </form>
            </div>     
          </div>
        }

      </div>
    )
  }

}

const MesageSent = () => {

  return (
    <div className="sent d-flex justify-content-center">
     <p className="align-self-center text-center">Message sent!</p>
    </div>
  )
}



const mapStateToProps = ({filtered, loading, searchTrue}) => {
  return {filtered, loading}
}

export default connect(mapStateToProps)(Home)