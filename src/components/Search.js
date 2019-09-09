import React, { Component } from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import RandomInSearch from '../components/RandomInSearch'
import {filterItems, fiterByCategory, fiterByCatInSearch, setSearchingTrue, showSearchDesc, homeSrollAction} from '../store/actions'
import '../App.css'
import './css/search.css'
import './css/category.css'




class Search extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        searching: true
      }
    }

    componentDidMount() {
      // this.setState({searching: true});
      // this.props.homeSrollAction(false)
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
          <div  className="category search">
            <div class="d-md-flex justify-content-md-between position-relative">
              <div className="text-left abouttxt">
                <p className="searchRes">Search Results</p>
                 <RandomInSearch/>
              </div>
            </div>

            <div className="lineSep">
              <button className="btn btn-outline-secondary dropdown-toggle buttonInSearch" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Category
              </button>
              <div className="dropdown-menu">
                  <div className="dropdown-item" data-categ="beef" onClick={this.changeCategory.bind(this)} href="#">Beef</div>
                  <div className="dropdown-item" data-categ="chicken" onClick={this.changeCategory.bind(this)} href="#">Chicken</div>
              </div>
            </div>  

            <div className="d-flex justify-content-center mx-auto" ref="list">
              <div className="flex-wrapper mx-auto">
                {this.props.searchTrue ? ListItemName : ListItemCat}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)