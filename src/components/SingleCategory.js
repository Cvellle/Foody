import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectItem, filterItems, fiterByCategory } from "../store/actions";
import "./css/home.css";

class singleCategory extends React.Component {
  selectCateg(e) {
    this.props.fiterByCategory(e.target.dataset.category.toLowerCase());
  }

  render() {
    const link = `/category`;

    return (
      <div onClick={this.selecteMe} className="categoryLink">
        <Link to={link}>
          <img
            src="https://forkgasm.com/images/grand-marnier-ice-cream.jpg"
            data-category={this.props.data}
            onClick={this.selectCateg.bind(this)}
          />
        </Link>
        <div>
          <strong>{this.props.data ? this.props.data : "All"}</strong>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filtered }) => ({ filtered });
const mapDispatchToProps = { selectItem, fiterByCategory, filterItems };

export default connect(mapStateToProps, mapDispatchToProps)(singleCategory);
