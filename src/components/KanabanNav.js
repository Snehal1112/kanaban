import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faUserAlt);
class KanabanNav extends Component {
  render() {
    return (
      <div
        style={{
          padding: "20px 0px 20px 0px",
          width: "100%",
          backgroundColor: "#0D47A1"
        }}
      >
        <FontAwesomeIcon icon={faUserAlt} color="#2C3A47" />
      </div>
    );
  }
}
export default KanabanNav;
