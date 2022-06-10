import React, { Component } from 'react'
import { StyledError } from './ErrorBoundery.styled'

class ErrorBoundery extends Component {
	constructor (props) {
		super(props)
		this.state = { hasError: false, error: null, errorInfo: null }
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true, error: error, errorInfo: errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return <StyledError>Somethig went wrong...</StyledError>
		}

		return this.props.children
	}
}

export default ErrorBoundery