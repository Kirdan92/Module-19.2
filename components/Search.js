Search = React.createClass({
	getInitialState() {
		return {
			searchingText: ''
		};
	},
	handleChange(event) {
		var searchingText = event.target.value;
		this.setState({
			searchingText: searchingText
		});

		if (searchingText.length > 2) {
			this.props.onSearch(searchingText);
		}
	},

	handleKeyUp(event) {
		if (event.keyCode === 13) {
			//komunikacja do rodzica aby uruchomil funkcje wyszukiwania gifa
			this.props.onSearch(this.state.searchingText);
		}
	},

	render() {
		var styles = {
			fontSize: "1.5em",
			width: '90%',
			maxWidth: "350px"
		};



		return <input
				type="text"
				onChange={this.handleChange}
				onKeyUp={this.handleKeyUp}
				placeholder="Tutaj wpisz wyszukiwaną frazę"
				style={styles}
				value={this.state.searchTerm}
				/>
	}
});