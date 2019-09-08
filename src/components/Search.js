import React, { Component } from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import {filterItems, fiterByCategory, fiterByCatInSearch, setSearchingTrue} from '../store/actions'
import '../App.css'


class Search extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        filteredByCtg: [],
        filteredByName: null,
        searching: true
      }
    }

    componentDidMount() {
      this.setState({searching: true});
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

    componentDidMount() {
      document.getElementById('homeLink').style.display="block";
      document.getElementById('img').style.display="none";
    }  

    render() {
        const ListItemCat = this.props.filteredByCatInSearch.map(it => 
            <Item el={it} key={it.id} className="listItem" />
        )

        const ListItemName = this.props.filtered2.map(it => 
            <Item el={it} key={it.id} className="listItem" />
      )

        return (
          <div  className="category">
            <div class="d-md-flex justify-content-md-between">
              <div className="text-left abouttxt">
                {/* <RandomItem/> */}
              </div>
              <div className="">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" data-categ="beef" onClick={this.changeCategory} href="#">Beef</a>
                    <a class="dropdown-item" data-categ="chicken" onClick={this.changeCategory} href="#">Chicken</a>
                </div>
              </div>
            </div>

            <div className="lineSep"></div>  

            <div className="d-flex justify-content-center mx-auto">
              <div className="flex-wrapper mx-auto">
                {this.props.seachTrue ? ListItemName : ListItemCat}
              </div>    
            </div>
          </div>
        )
    }
  
}
{/* <div  className="category">
<h2 className="text-left categoryTitle">Search results</h2>
<div class="d-md-flex justify-content-md-between">
  <div className="text-left abouttxt">
    <RandomItem/>
  </div>
  <div className="">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Category
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" data-categ="beef" onClick={this.changeCategory} href="#">Beef</a>
        <a class="dropdown-item" data-categ="chicken" onClick={this.changeCategory} href="#">Chicken</a>
    </div>
  </div>
</div>

<div className="lineSep"></div>  

<div className="d-flex justify-content-center mx-auto">
  <div className="flex-wrapper mx-auto">
    {this.state.searching ? ListItemCat : ListItemName}
  </div>
  
</div> */}

const mapStateToProps = ({filtered, filtered2, loading, filteredByCatInSearch, seachTrue}) => {
  return {filtered, filtered2, loading, filteredByCatInSearch, seachTrue}
}

const mapDispatchToProps = { filterItems, fiterByCategory, fiterByCatInSearch, setSearchingTrue }

export default connect(mapStateToProps, mapDispatchToProps)(Search)