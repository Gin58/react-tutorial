import React from "react";
import { connect } from "react-redux";

@connect((store) => {
  return {
    user: store.userReducer.user
  };
})

export default class Layout extends React.Component {
  render() {
    console.log(this.props.user);
    return null;
  }
}