import React, { Component } from 'react';
import Pic from './Pic';
import GoogleImages from 'google-images';
const client = new GoogleImages('005644268192153812663:59gcui6571q', 'AIzaSyAOvbEzVZwxZgWlRE2fBPScYiWIBn0YZc8');

class App extends Component {
  state = {
  	searchImages: [],
		error: null
	}
	startSearch() {
  	const searchQuery = this.refs.searchQuery.value;
  	if(searchQuery.trim() !== ''){
			client.search(searchQuery)
				.then(images => {
					this.setState({searchImages: [...images], error: null});
				})
				.catch(error => {
					console.log(error);
				})

			client.search(searchQuery, {size: 'medium'});
		} else{
  		this.setState({searchImages: []});
		}

	}
  render() {
    return (
      <div className="App">
				<div className="App_input">
					<input
						className="App_input_mod"
						autoFocus={true}
						placeholder="Enter search image"
						type="text" ref="searchQuery"
						onChange = {this.startSearch.bind(this)}/>
				</div>
				{this.state.error === null ? <Pic searchImages = {this.state.searchImages}/> : "Something went wrong"}
      </div>
    );
  }
}

export default App;
