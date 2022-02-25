import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from 'app/Actions';

const LoadPage = (WrappedComponent) =>
	class extends Component {
		pageLoad = true;

		async pageLoading(props) {
			if (!this.pageLoad) {
				return;
			}

			this.pageLoad = false;
			props.pageLoading();

			await props.onLoad();
			await props.pageLoaded();

			this.pageLoad = true;
		}

		UNSAFE_componentWillMount() {
			this.pageLoading(this.props);
		}

		shouldComponentUpdate(nextProps) {
			if (this.props.match.url !== nextProps.match.url) {
				this.pageLoading(nextProps);

				return false;
			}

			return true;
		}

		componentWillUnmount() {
			if (this.props.onUnload) {
				this.props.onUnload();
			}
		}

		render() {
			return <WrappedComponent key={this.props.match.url} {...this.props} />;
		}
	};

const mapStateToProps = (state) => ({
	profile: state.appState.profile,
});

const mapDispatchToProps = (dispatch) => ({
	pageLoading: AppActions.pageLoading(dispatch),
	pageLoaded: AppActions.pageLoaded(dispatch),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), LoadPage);
