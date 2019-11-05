import React, { Component } from "react";
import Modal from "./Modal/index";
export default class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, props: this.props };
  }
  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  render() {
    const {
      ImageURLs,
      CollectiveNoun,
      Title,
      Family,
      Description
    } = this.props.animal;

    return (
      <>
      
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-150 position-relative grid-data" >
          <div className="col-auto d-none d-lg-block" onClick={this.toggleState}>
            <img src={ImageURLs.Thumb} height="150" width="150" alt="animal" />
            </div>
            <div className="col p-2 d-flex flex-column position-static">
              <h4 className="mb-0">{Title}</h4>
              <p className="card-text mb-auto description"  style={{"height": "100px"}}>{ Description } </p>
            </div>
            
          </div>
          {this.state.isModalOpen && (
          <Modal
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
          >
        <div className="wrapper">
          <div className="product-img">
            <img src={ImageURLs.FullSize} height="420" width="450" alt="animal" />
            
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>{Title}</h1>
              <h2>{Family}</h2>
              
              <p>{ Description } </p>
              <h4>{CollectiveNoun}</h4>
            </div>
            
          </div>
        </div>
        </Modal>)}
        </div>
        
      
      </>
    );
  }
}
