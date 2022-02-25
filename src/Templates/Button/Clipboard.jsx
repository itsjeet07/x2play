import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'templates/Icon';

const propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

let timeoutId;

const Clipboard = ({ value, name }) => {
	const [copy, setCopy] = useState(false);
	const ref = useRef(null);

	const copyToClipboard = () => {
		ref.current.value = value;
		ref.current.select();
		document.execCommand('copy');
		setCopy(true);
		window.setTimeout(() => {
			setCopy(false);
		}, 3000);
	};

	useEffect(() => {
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<button
				onClick={copyToClipboard}
				type='button'
				name={name}
				className={`clipboard ${copy ? 'copied' : ''}`}
			>
				<Icon name='copy' />
			</button>
			<textarea
				ref={ref}
				className='visuallyhidden'
				value=''
				onChange={() => {}}
			/>
		</>
	);
};

Clipboard.propTypes = propTypes;

export default Clipboard;
