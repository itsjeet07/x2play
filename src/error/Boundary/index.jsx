import React, { Component } from 'react';
import ErrorIndicator from '../Indicator';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
