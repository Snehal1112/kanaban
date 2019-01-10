import React, { Component } from 'react';
import Bug from '@atlaskit/icon-object/glyph/epic/16';

/*
 * The Kanban Board Card component
 */
class KanbanCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true
		};
	}

	render() {
		return (
			<div
				className="card"
				draggable={true}
				onDragEnd={(e) => {
					this.props.onDragEnd(e, this.props.project);
				}}
			>
				<div className="ghx-grabber" />
				<div className="ghx-issue-content">
					<div className="ghx-issue-fields">
						<div className="ghx-type">
							<Bug />
						</div>
						<div className="ghx-key">
							<a href="#">{this.props.project.name}</a>
						</div>
						<div className="ghx-summary">
							<span className="ghx-inner"> {this.props.project.description}</span>
						</div>
					</div>
					<div className="ghx-highlighted-fields">
						<div className="ghx-highlighted-field">
							<span className="aui-label ghx-label-6" title="Iconpack">
								Iconpack
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default KanbanCard;
