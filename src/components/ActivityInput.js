import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

// TODO: Possibly use const... behavior
// TODO: Incorporate w/ Redux
class ActivityInput extends Component {
	state = {
		type: "",
		role: "Personal",
		category: "",
		sub_category: "",
		project: "",
		start: "",
		end: "",
		description: "",
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { type, role, category, sub_category, project, start, end, description } = this.state;
		const lead = { type, role, category, sub_category, project, start, end, description };
		const conf = {
			method: "post",
			body: JSON.stringify(lead),
			headers: new Headers({"Content-Type": "application/json" }),
		};
		fetch(this.props.endpoint, conf).then(response => console.log(response));
	};

	render() {
		const { type, role, category, sub_category, project, start, end, description } = this.state;
		return (
		  <div className="column">
			<form onSubmit={this.handleSubmit}>
			  <div className="field">
				<label className="label">Role</label>
				<div className="control">
				  <label className="label">Work</label>
				  <input
					className="input"
					type="radio"
					name="role"
					onChange={this.handleChange}
					value="Work"
					checked={role === "Work"}
					required
				  />
				</div>
				<div className="control">
				  <label className="label">Personal</label>
				  <input
					className="input"
					type="radio"
					name="role"
					onChange={this.handleChange}
					value="Personal"
					checked={role === "Personal"}
					required
				  />
				</div>
			  </div>
			  <div className="field">
				<label className="label">Type</label>
				<div className="control">
				  <input
					className="input"
					type="text"
					name="type"
					onChange={this.handleChange}
					value={type}
					required
				  />
				</div>
			  </div>
			  <div className="field">
				<label className="label">Start</label>
				<div className="control">
				  <input
					className="input"
					type="datetime-local"
					name="start"
					onChange={this.handleChange}
					value={start}
					required
				  />
				</div>
			  </div>
			  <div className="field">
				<label className="label">End</label>
				<div className="control">
				  <input
					className="input"
					type="datetime-local"
					name="end"
					onChange={this.handleChange}
					value={end}
					required
				  />
				</div>
			  </div>
			  <div className="field">
				<label className="label">Description</label>
				<div className="control">
				  <textarea
					className="input"
					type="textarea"
					name="description"
					onChange={this.handleChange}
					value={description}
					required
				  />
				</div>
			  </div>
			  <div className="control">
				<button type="submit" className="button is-info">
				  Send message
				</button>
			  </div>
			</form>
		  </div>
		);
	};
}

ActivityInput.propTypes = {
	endpoint: PropTypes.string.isRequired,
};

export default ActivityInput;
