import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from'react-bootstrap';

class Cart extends Component {
	
	render() {
	    if(this.props.cart[0]){
	      return this.renderCart();
	    } else {
	      return this.renderEmpty();
		} 
	}

	componentDidMount() {
		console.log('Cart', this.props.cart);
	}

  	renderEmpty() {
    	return(<div>Empty Cart</div>)
	}

	renderCart() {
		const cartItemsList = this.props.cart.map(cartArr => {
	      return(
	        <Panel key={cartArr.id}>
	          <Row>

	            <Col xs={12} sm={4}>
	              <h6>{cartArr.title}</h6>
	              <span></span>
	            </Col>
				
				<Col xs={12} sm={2}>
					<h6>usd. {cartArr.price}</h6>
				</Col>

				<Col xs={12} sm={2}>
					<h6>qty. <Label bsStyle="success"></Label></h6>
				</Col>

				<Col xs={6} sm={4}>
					<ButtonGroup style={{minWidth:'300px'}}>
						<Button bsStyle="default" bsSize="small">-</Button>
						<Button bsStyle="default" bsSize="small">+</Button>
						<span></span>
						<Button bsStyle="danger" bsSize="small">DELETE</Button>
					</ButtonGroup>
				</Col>

	          </Row>
	        </Panel>); 
	    });

	    return(
	      <Panel header="Cart" bsStyle="primary">
	        {cartItemsList}
		  </Panel>);
	}
}

const mapStateToProps = state => ( 
	{
		cart: state.cart.cart
	} 
);

export default connect(mapStateToProps)(Cart)