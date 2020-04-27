// import React from 'react';
// import ReactDOM from 'react-dom';
import inventoryImage from '../public/dist/nike-inventory.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleDetails: {}
    }
  }

  setStyleDetails(detailsObj) {
    this.setState({
      styleDetails: detailsObj
    })
  }

  componentDidMount() {
    this.setState({
      styleDetails: {
        name: 'Nike Blazers',
        price: 185,
        salePrice: 150,
        thumbnail:'https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe'
      }
    })
  }

  render() {
    if (!this.state.styleDetails) {
      return <div className='loading'/>
    }

    return (
      <div id="nike-body" >
        <div id="images">
          <ProductImages productDetails={this.state.styleDetails}/>
        </div>
        <div id="product-details">
          <img src={inventoryImage}></img>
          <div className='breaker-line'>
            <Description productDetails={this.state.styleDetails} className="description"/>
          </div>
          <ShippingReturns/>
          <Reviews productDetails={this.state.styleDetails}/>
        </div>
      </div>
    )
  }
}

window.App = App
