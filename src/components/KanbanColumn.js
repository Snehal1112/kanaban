import React, { Component } from 'react';
import KanbanCard from './KanbanCard';

/*
 * The Kanban Board Column React component
 */
class KanbanColumn extends Component {
	constructor(props) {
		super(props);
		this.state = { mouseIsHovering: false };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ mouseIsHovering: false });
	}

	generateKanbanCards() {
		return this.props.projects.slice(0).map((project) => {
			return <KanbanCard project={project} key={project.name} onDragEnd={this.props.onDragEnd} />;
		});
	}

	render() {
		const columnStyle = {
			backgroundColor: '#f4f5f7',
			boxSizing: 'border-box',
			display: 'table-cell',
			listStyle: 'none',
			margin: '0',
			padding: '1px 0 0',
			position: 'relative',
			verticalAlign: 'top',
			borderRadius: '4px',
			textAlign: 'center'
		};
		return (
			<li
				style={columnStyle}
				onDragEnter={(e) => {
					this.setState({ mouseIsHovering: true });
					this.props.onDragEnter(e, this.props.stage);
				}}
				onDragExit={(e) => {
					this.setState({ mouseIsHovering: false });
				}}
			>
				<h4>
					{this.props.stage}. {this.props.name} ({this.props.projects.length})
				</h4>
				{this.generateKanbanCards()}
			</li>
		);
	}
}

export default KanbanColumn;
