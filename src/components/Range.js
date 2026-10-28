// JavaScript source code
import React from "react"

class Range extends React.Component {
	state =
		{
			value: "0"
		}

	range = (event) => {
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<>
				<input type="range" value={this.state.value} onChange={this.range}/* max={ 2 } *//>
				<div>{this.state.value}</div>
			</>
		)
	}
}

export default Range;