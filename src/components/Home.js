import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import chickenImg from "../images/meals/caesar-salad.jpg";
import beefImg from "../images/meals/curried-beef-stew.jpg";
import porkImg from "../images/meals/carbonara.jpg";
import vegeterianImg from "../images/meals/sfouggato.png";
import seaFoodImg from "../images/meals/gambas.png";
import allMeals from "../images/meals/allMeals.jpg";
import SingleCategory from "../components/SingleCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import { homeSrollAction } from "../store/actions";
import headimg from "../images/himg.png";
import team from "../images/team.jpg";
import "./css/home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
    };
  }

  componentDidMount() {
    document.getElementById("homeLink").style.display = "none";
    document.getElementById("img").style.display = "block";

    if (this.props.aboutScroll) {
      this.refs.about.scrollIntoView({ behavior: "smooth" });
    }
    if (this.props.contactScroll) {
      this.refs.contact.scrollIntoView({ behavior: "smooth" });
    }

    this.props.homeSrollAction(true);
  }

  saveMessage = (e) => {
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
      sent: true,
    });
  };

  scroll() {
    this.refs.category.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <div className="headblock position-relative">
          <div className="d-md-flex justify-content-md-between">
            <Col xs="12" sm="6" className="text-left align-self-center p-0">
              <div>
                <h1 className="align-self-center">Food Recipes</h1>
                <p className="align-self-center mainDescr">
                  Food is as healthier as it contains more colors.
                  <br />
                  Cooking is more than just a necessity. It is a creative
                  process.
                  <br />
                  It reliefs you from stress, and you enjoy it's visual
                  aesthetics also.
                  <br />
                  Play with food, and live healthy.
                </p>
              </div>
            </Col>
            <Col xs="12" md="6">
              <img
                xs="12"
                sm="6"
                src={headimg}
                className="d-sm-block d-flex justify-content-end"
              />
            </Col>
          </div>
          <button onClick={this.scroll.bind(this)} className="categoryBtn">
            Categories <span className="rotate d-inline-block">&rsaquo;</span>
          </button>
        </div>

        <div className="categories" ref="category" id="category">
          <Row>
            <Col xs="12" sm="4">
              <SingleCategory name="" imgPath={allMeals} />
            </Col>
            <Col xs="12" sm="4">
              <SingleCategory name="Beef" imgPath={beefImg} />
            </Col>
            <Col xs="12" sm="4">
              <SingleCategory name="Chicken" imgPath={chickenImg} />
            </Col>
            <Col xs="12" sm="4">
              <SingleCategory name="Vegeterian" imgPath={vegeterianImg} />
            </Col>
            <Col xs="12" sm="4">
              <SingleCategory name="Seafood" imgPath={seaFoodImg} />
            </Col>
            <Col xs="12" sm="4">
              {" "}
              <SingleCategory name="Pork" imgPath={porkImg} />
            </Col>
          </Row>
        </div>

        <div className="about" ref="about" id="about">
          <h2 className="text-md-left">About Us</h2>
          <div class="dash mx-auto mx-md-0"></div>
          <div class="d-md-flex justify-content-md-between">
            <div className="text-left abouttxt">
              We are dedicated to today's passionate food lover. For food
              people, by food people, our portal is the answer to a growing
              hunger for more content devoted to food and cooking in every
              dimension from global cuisines to international travel, history
              and unconventional how-to's. There are plenty of quick, simple,
              and wholesome meals you can cook at home in less time than it
              takes to travel to a restaurant or wait for a delivery. By cooking
              for yourself, you can ensure that you and your family eat fresh,
              wholesome meals. This can help you to look and feel healthier,
              boost your energy, stabilize your weight and mood, and improve
              your sleep and resilience to stress. And you don’t have to be an
              accomplished chef. Whatever your abilities or experience as a
              cook, you can learn to prepare quick and healthy meals that can
              have real benefits for your mental and physical health.
            </div>
            <div className="">
              <img src={team} className="d-flex justify-content-end team" />
            </div>
          </div>
        </div>

        <div className="contact" ref="contact" id="contact">
          <h2 className="text-center">Contact</h2>
          <div class="dash-cont d-block mx-auto"></div>
        </div>

        {this.state.sent ? (
          <MesageSent />
        ) : (
          <div className="formHeight">
            <div className="contact d-flex justify-content-center">
              <form className="col-sm-4">
                <div className="form-group">
                  <input
                    type="text"
                    myRef="fname"
                    ref="fname"
                    className="form-control"
                    id="fname"
                    aria-describedby="emailHelp"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref="lname"
                    className="form-control"
                    id="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref="mail"
                    className="form-control"
                    id="mail"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    ref="msg"
                    id="messaage"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.saveMessage}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const MesageSent = () => {
  return (
    <div className="sent d-flex justify-content-center">
      <p className="align-self-center text-center">Message sent!</p>
    </div>
  );
};

const mapStateToProps = ({
  filtered,
  loading,
  about,
  contact,
  aboutScroll,
  contactScroll,
  homeScroll,
}) => {
  return {
    filtered,
    loading,
    about,
    contact,
    aboutScroll,
    contactScroll,
    homeScroll,
  };
};

const mapDispatchToProps = { homeSrollAction };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
