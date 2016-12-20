import React, { Component } from 'react';
import List from '../../Components/List/List';

class App extends Component {
	render() {
		return (
			<main>
				<header>
					<a className="logo" href="#">
						<h1>JobScore</h1>
					</a>
					<h2 className="systemname">Jobs</h2>
					<img className="avatar img-circle navbar-right" alt="avatar" src="img/avatar.png"/>
					<p className="user">Logged as Someone</p>
				</header>
				<List/>
			</main>
		);
	}
}

export default App;
