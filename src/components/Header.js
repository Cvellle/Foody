import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {filterItems} from '../store/actions'
import {fiterByCatInSearch, setSearchingTrue, showSearchDesc, aboutScrollAction, contactScrollAction, homeSrollAction, filterItemsSearch} from '../store/actions'
import Login from '../components/Login'
import './css/header.css'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageHidden:false
    }
  }

  componentDidMount() {
    document.getElementById('homeLink').style.display="none";
  }

  scrollAbout() {
    this.props.homeScroll ? 
      document.getElementById('about').scrollIntoView({behavior: 'smooth'}) : 
      this.props.aboutScrollAction(true);
    this.props.contactScrollAction(false)
  }

  scrollContact() {
    this.props.homeScroll ?
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'}) :
      this.props.aboutScrollAction(false);
    this.props.contactScrollAction(true)    
  }

  removeScroll() {
    this.props.aboutScrollAction(false)
    this.props.contactScrollAction(false)
    this.props.homeSrollAction(true)
  }


  search = e => {
    this.props.filterItemsSearch(e.target.value);
    this.props.setSearchingTrue(true);
    this.props.showSearchDesc(true)
    this.props.homeSrollAction(false)
  }

  
  render() {

    return (
      <header className="App-header d-flex justify-content-between">
        <NavLink replace={true} to="/search" className="">{' '}
          <div className="row">
            <div className="input-group">
              <input className="form-control py-2 border-right-0 border" onChange={ this.search } placeholder="search" id="example-search-input"/>
              <span class="input-group-append">
                  <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
              </span>
            </div>
          </div>        
        </NavLink>
        <nav className="d-flex align-items-center">
          <div id="img">
            <Login className="navL"/>
          </div>
          <NavLink replace={true} to="/" className="navL homeLink" id="homeLink" onClick={this.removeScroll.bind(this)}>Home</NavLink>{' '}
          <NavLink to="/" className="navL"><div onClick={this.scrollAbout.bind(this)}>About us</div></NavLink>{' '}
          <NavLink className="navL" replace={true} to="/" onClick={this.scrollContact.bind(this)}>Contact</NavLink>{' '}
        </nav>
      </header>
    )
  }
}

const mapStateToProps = ({selectedItem, homeScroll}) => ({selectedItem, homeScroll})

const mapDispatchToProps = {
  filterItems,
  fiterByCatInSearch,
  setSearchingTrue,
  showSearchDesc,
  aboutScrollAction,
  contactScrollAction,
  homeSrollAction,
  filterItemsSearch
 }

export default connect(mapStateToProps, mapDispatchToProps)(Header)