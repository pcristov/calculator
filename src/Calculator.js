import React, {Component} from 'react';
import './Calculator.css';

export default class Calculator extends Component {

	constructor(props) {
	    super(props)
	    
	    this.state = {
		    stack: "",
		    result: "0",
		    decimal: 0
	    }
	    
	    this.addToStack = this.addToStack.bind(this);
	    this.equals = this.equals.bind(this);
	    this.clear = this.clear.bind(this);
	}
	
	addToStack(e) {
		const stack = this.state.stack;
		const operations = ['+', '-', '/', '*'];
		const operationsExceptSubtraction = ['+', '/', '*'];
		let input = e.target.innerHTML;

		if(input === 'x') { input = '*' }
		
		if(input === '.') {
			if(this.state.decimal)	{
				input = ''
			}
			else {
				this.setState({
					decimal: 1
		    	});
		 	}
		}
		
		if(operations.includes(input) && this.state.decimal) {
			this.setState({
				decimal: 0
		    });
		}
		
		if(stack[stack.length - 1] === '0' && input === '0') {
			if(!this.state.decimal)	{
				input = ''
			}
		}
		
		if(operationsExceptSubtraction.includes(input) && stack.length === 0) {
			input = ""
		}
		
		if(operations.includes(stack[stack.length - 1]) && operations.includes(input)) {
			if(input !== '-' && operationsExceptSubtraction.includes(stack[stack.length - 1])) {
				this.setState({
					stack: stack.slice(0, -1) + input
			    });
		    }
		    else {
			    if(stack[stack.length - 1] !== '-') {
					this.setState({
						stack: stack.concat(input)
				    });
			    }
		    }
		}
		else {
			this.setState({
				stack: stack.concat(input)
		    });
	    }
	}
	
	equals() {
		const stack = this.state.stack;
		
		this.setState({
			result: eval(stack)
	    }, () => this.setState({ stack: this.state.result.toString() }));
	}
	
	clear() {
		this.setState({
		    stack: "",
		    result: "0"
	    });
	}
	
	componentDidMount() {
		
	}
	
	componentWillUnmount() {
		
	}
	
	render() {
		return (
			<div className="wrapper" id="wrapper">
				<div className="display" id="display">
					{ this.state.stack }
					<br />
					<span id="result">
						{ this.state.result }
					</span>
				</div>
				
				<div className="clear" id="clear" onClick={ this.clear }>AC</div>
				<div className="divide" id="divide" onClick={ this.addToStack }>/</div>
				<div className="multiply" id="multiply" onClick={ this.addToStack }>x</div>
				
				<div className="seven" id="seven" onClick={ this.addToStack }>7</div>
				<div className="eight" id="eight" onClick={ this.addToStack }>8</div>
				<div className="nine" id="nine" onClick={ this.addToStack }>9</div>
				<div className="subtract" id="subtract" onClick={ this.addToStack }>-</div>
				
				<div className="four" id="four" onClick={ this.addToStack }>4</div>
				<div className="five" id="five" onClick={ this.addToStack }>5</div>
				<div className="six" id="six" onClick={ this.addToStack }>6</div>
				<div className="add" id="add" onClick={ this.addToStack }>+</div>
				
				<div className="one" id="one" onClick={ this.addToStack }>1</div>
				<div className="two" id="two" onClick={ this.addToStack }>2</div>
				<div className="three" id="three" onClick={ this.addToStack }>3</div>
				<div className="equals" id="equals" onClick={ this.equals }>=</div>
				
				<div className="zero" id="zero" onClick={ this.addToStack }>0</div>
				<div className="decimal" id="decimal" onClick={ this.addToStack }>.</div>
			</div>
	)}
}