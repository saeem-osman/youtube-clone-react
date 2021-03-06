import React from 'react';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import youtube from './/apis/youtube'
import VideoDetail from './components/VideoDetail';

class App extends React.Component{

    state = {
        vidoes: [],
        selectedVideo : null
    }

    componentDidMount(){
        this.onTermSubmit('science fiction')
    }

    onTermSubmit = async term =>{
       const response =  await youtube.get('/search',{
            params: {
                q : term,
            }
        })
        this.setState({
            vidoes : response.data.items,
            selectedVideo : response.data.items[0]
        })
        
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar
                    onFormSubmit = {this.onTermSubmit}
                />
                <div className="ui grid">
                    <div className=" ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos = {this.state.vidoes}
                                onVideoSelect = {this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App