var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
	minHeight: '310px',
	margin: '0.5em'
};

Gif = React.createClass({
	getUrl() {
		//zwraca adres do gifa albo animacje ładowania
		return this.props.sourceUrl || GIPHY_LOADING_URL;
	},

	render() {
		//ustawia url jesli this.props.loading ma wartosc false (zeby podczas pobierania nie ustawilo)
		var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url; 
		return (
			<div style={styles}>
				<a href={this.getUrl()} title='view this on giphy' target='new'>
					<img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
				</a>
			</div>
		);
	}
});