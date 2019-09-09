import React, { Component } from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import RandomItem from '../components/RandomItem'
import {fetchItems, filterItems, showSearchDesc, homeSrollAction} from '../store/actions'
import './css/category.css'
import '../App.css'


class Category extends Component {

    constructor(props) {
      super(props)
      this.state = {
        searching: false
      }
    }

    search = e => {
      this.props.filterItems(e.target.value);
      this.setState({searching: true});
    }

    componentDidMount() {
      document.getElementById('homeLink').style.display="block";
      document.getElementById('img').style.display="none";
      this.props.homeSrollAction(false)
      this.props.showSearchDesc(false)
    }  

    render() {
        const ListItem = this.props.filtered.map(it => 
            <Item el={it} key={it.id} className="listItem"/>
        )

        const ListItem2 = this.props.filtered2.map(it => 
            <Item el={it} key={it.id} className="listItem"/>
      )

        const categoryTitle = this.props.filtered[1].category.charAt(0).toUpperCase() + this.props.filtered[1].category.slice(1);
        
      
      return (
          <div  className="category">
            <h2 className="text-left categoryTitle">{categoryTitle}</h2>
            <div class="d-md-flex justify-content-md-between">
              <div className="text-left abouttxt">
                <RandomItem/>
              </div>
              <div className="">
                <div className="input-group">
                  <input className="form-control py-2 border-right-0 border" onChange={this.search} placeholder="search" id="example-search-input"/>
                  <span className="input-group-append">
                      <button className="btn btn-outline-secondary border-left-0 border" type="button">
                          <i className="fa fa-search"></i>
                      </button>
                    </span>
                </div>
              </div>
            </div>

            <div className="lineSep"></div>       

            <div className="d-flex justify-content-center mx-auto">
              <div className="flex-wrapper mx-auto">
                {this.state.searching ? ListItem2 : ListItem}
              </div>    
            </div>

          </div>
        )
    }
  
}


const mapStateToProps = ({filtered, filtered2, loading}) => {
  return {filtered, filtered2, loading}
}

const mapDispatchToProps = { fetchItems, filterItems, showSearchDesc, homeSrollAction }

export default connect(mapStateToProps, mapDispatchToProps)(Category)