import React, { Component } from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import RandomInSearch from '../components/RandomInSearch'
import {filterItems, fiterByCategory, fiterByCatInSearch, setSearchingTrue, showSearchDesc, homeSrollAction} from '../store/actions'
import '../App.css'
import './css/search.css'
import './css/category.css'



class Mymeals extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        searching: true
      }
    }

    componentDidMount() {
      this.setState({searching: true});
      this.props.homeSrollAction(false)
      document.getElementById('homeLink').style.display="block";
      document.getElementById('img').style.display="none";
    }  


    changeCategory = e => {
      this.props.fiterByCatInSearch(e.target.dataset.categ);
      this.setState({searching: false});
      this.props.setSearchingTrue(false);
    }
    
    search = e => {
      this.props.filterItems(e.target.value);
      this.setState({searching: true});
    }

    render() {
        const ListItemCat = this.props.filteredByCatInSearch.map(it => 
            <Item el={it} key={it.id} className="listItem" />
        )

        const ListItemName = this.props.filtered2.map(it => 
            <Item el={it} key={it.id} className="listItem" />
      )

        return (
          <div  className="category search mymeals">
            <div className="d-flex justify-content-center mx-auto" ref="list">
              <div className="flex-wrapper mx-auto">
                  <div className="col-sm-4">
                      <RandomInSearch/> 
                  </div>
                  <div className="col-sm-4">
                      <RandomInSearch/> 
                  </div>
                  <div className="col-sm-4">
                      <RandomInSearch/> 
                  </div>
              </div>    
            </div>
          </div>
        )
    }
  
}


const mapStateToProps = ({filtered, filtered2, loading, filteredByCatInSearch, searchTrue }) => {
  return {filtered, filtered2, loading, filteredByCatInSearch, searchTrue}
}

const mapDispatchToProps = { filterItems, fiterByCategory, fiterByCatInSearch, setSearchingTrue, showSearchDesc, homeSrollAction }

export default connect(mapStateToProps, mapDispatchToProps)(Mymeals)