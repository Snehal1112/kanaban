import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-container">
        <input className="search-text" placeholder="Search in" type="text" />
        <a href="#" className="search-btn">
          <FontAwesomeIcon icon={this.props.icon} style={{}} />
        </a>
      </div>
    );
  }
}
export default SearchBox;
