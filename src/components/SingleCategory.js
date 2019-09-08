import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {selectItem, filterItems, fiterByCategory} from '../store/actions'





class singleCategory extends React.Component {

  render() {

    const link = `/category`    

    return (
      <div onClick={this.selecteMe}>     
        <Link to={link}>
          <img src="https://forkgasm.com/images/grand-marnier-ice-cream.jpg" data-category={this.props.data} 
          onClick={e => this.props.fiterByCategory(e.target.dataset.category.toLowerCase())}/>
        </Link>
        <div>
           <strong>{this.props.data}</strong>
        </div>  
      </div>
    )
  }
}


const mapStateToProps = ({selected, filtered}) => ({selected, filtered})
const mapDispatchToProps = { selectItem, filterItems, fiterByCategory }

export default connect(mapStateToProps, mapDispatchToProps)(singleCategory)
