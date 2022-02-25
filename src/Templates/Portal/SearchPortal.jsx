import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
    children: PropTypes.node.isRequired,
};

class SearchPortal extends Component {
    content = document.getElementById('header-search');
    el = document.createElement('div');

    componentDidMount() {
        this.content.appendChild(this.el);
    }

    componentWillUnmount() {
        this.content.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

SearchPortal.propTypes = propTypes;

export default SearchPortal;
