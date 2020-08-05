import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error info: ", info)
    }
    
    render() {
        return (
            this.state.hasError ? <h1>Hubo un error</h1> : this.props.children
        );
    }
}

ErrorBoundary.propTypes = {

};

export default ErrorBoundary;