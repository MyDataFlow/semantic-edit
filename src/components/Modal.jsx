import React, {
	PropTypes
} from 'react'

import Ace from 'react-ace';
import brace from 'brace';
import html from 'brace/mode/html'
import monokai from 'brace/theme/tomorrow'

class Modal extends React.Component {

	show() {
		$('.ui.modal').modal('show');
	}

	render () {

		return (
			<div className="ui modal">
				<i className="close icon"></i>
				<div className="header">
					Share Away
				</div>
				<div className="image content">
					<div className="description">
						<p>{this.props.html}</p>
					</div>
				</div>
				<div className="actions">
					<div className="ui positive right labeled icon button">
						Awesome
						<i className="checkmark icon"></i>
					</div>
				</div>
			</div>
		);
	}
}



	Modal.propTypes = {
		html: React.PropTypes.string
	}

export default Modal;
