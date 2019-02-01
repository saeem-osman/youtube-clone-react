import React from 'react';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import youtube from './/apis/youtube'

class App extends React.Component{

    state = {
        vidoes: []
    }

    onTermSubmit = async term =>{
       const response =  await youtube.get('/search',{
            params: {
                q : term,
            }
        })
        this.setState({
            vidoes : response.data.items
        })
        
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar
                    onFormSubmit = {this.onTermSubmit}
                />
                <VideoList
                videos = {this.state.vidoes}
                />
            </div>
        )
    }
}

export default App