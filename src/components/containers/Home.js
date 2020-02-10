import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Monitor from "../monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../../actions"

class Home extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
   this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.products && Array.isArray(this.props.products) &&
        (
        <Monitor products={this.props.products} />
        )
        }
        <Footer company="OLANLAB" email="olan@loanlab.com" />
      </div>
    );
  }
}
function mapStateTopProps({products}){
  return { products };

}

export default connect(mapStateTopProps, { productsFetch })(Home);
