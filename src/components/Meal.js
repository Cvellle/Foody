import React from 'react'
import { connect } from 'react-redux'
import {filterItems, homeSrollAction} from '../store/actions'
import RandomItem from '../components/RandomItem'
import '../App.css'
import './css/meal.css'


class Meal extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.homeSrollAction(false)
  }

  render() {
  return (
    <div className="meal">
       <h5 className="text-left"> {this.props.selected.name}</h5>
       <div className="d-sm-flex justify-content-sm-left">
        <div>
          <img src={this.props.selected.image}/>
        </div>
         <div className="inline-block position-relative">
           <div className="details text-left">
              <p className="text-left">Categoty: {this.props.selected.category}</p>
              <p className="text-left">Country: {this.props.selected.country}</p>
              <p className="text-left video">Video: <a href={this.props.selected.video}>{this.props.selected.video}</a></p>
              <p className="text-left">
              {this.props.selected.step[0].description}
              {this.props.selected.step[1].description}
              {this.props.selected.step[2].description}
              {this.props.selected.step[3].description}
              </p>
           </div>
          </div>
        </div>

        <table>
          <tr>
            <th>Ingredients</th>
            <th>Measure</th> 
          </tr>
          <tr>
            <td>{this.props.selected.ingr}</td>
            <td>{this.props.selected.amount}</td>
          </tr>
          <tr>
            <td>{this.props.selected.ingr}</td>
            <td>{this.props.selected.amount}</td>
          </tr>
          <tr>
            <td>{this.props.selected.ingr}</td>
            <td>{this.props.selected.amount}</td>
          </tr>
          <tr>
            <td>{this.props.selected.ingr}</td>
            <td>{this.props.selected.amount}</td>
          </tr>
        </table>
        <h3 className="text-left">Similar meals</h3>
        <div className="d-flex justify-content-center mx-auto random-list">
          <div className="flex-wrapper mx-auto">
            <div className="col-sm-4 item">      
            <RandomItem/>
            </div> 
            <div className="col-sm-4 item">      
            <RandomItem/>
            </div> 
            <div className="col-sm-4 item">      
            <RandomItem/>
            </div> 
          </div>    
        </div>

      </div>
    )
  }

}

const mapStateToProps = ({selected}) => ({selected})
const mapDispatchToProps = { filterItems, homeSrollAction }

export default connect(mapStateToProps, mapDispatchToProps)(Meal)