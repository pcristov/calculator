import React, {Component} from 'react';
import './Calculator.css';

export default class Calculator extends Component {

	constructor(props) {
	    super(props)
	    
	    this.state = {
	    }
	    
	    // this. = this..bind(this);
	    // this. = this..bind(this);
	}
	
	playSound(event) {
	  
		this.setState({
			
	    });
	}
	
	componentDidMount() {
		
	}
	
	componentWillUnmount() {
		
	}
	
	render() {
		return (
			<div className="wrapper" id="wrapper">
				<div className="display" id="display">display</div>
				
				<div className="clear" id="clear">AC</div>
				<div className="divide" id="divide">/</div>
				<div className="multiply" id="multiply">x</div>
				
				<div className="seven" id="seven">7</div>
				<div className="eight" id="eight">6</div>
				<div className="nine" id="nine">5</div>
				<div className="subtract" id="subtract">-</div>
				
				<div className="four" id="four">4</div>
				<div className="five" id="five">5</div>
				<div className="six" id="six">6</div>
				<div className="add" id="add">+</div>
				
				<div className="one" id="one">1</div>
				<div className="two" id="two">2</div>
				<div className="three" id="three">3</div>
				<div className="equals" id="equals">=</div>
				
				<div className="zero" id="zero">0</div>
				<div className="decimal" id="decimal">.</div>
			</div>
	)}
}