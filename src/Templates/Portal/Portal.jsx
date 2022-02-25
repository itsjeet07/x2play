import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};
class Portal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        const { className } = this.props;
        className && this.el.classList.add(className);
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
