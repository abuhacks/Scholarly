import React from "react"
import "./styles.css"
import Search from './components/Search'
import youtubeApi from './api/video'
import VideoList from "./components/VideoList"
import VideoPlayer from "./components/VideoPlayer"

export default class youtube extends React.Component {

    state = {
        videoMetaInfo:[],
        selectedVideoId:null 
    };

    onVideoSelected = videoId => {
        this.setState({
            selectedVideoId:videoId
        })
    }

    onSearch = async keyword => {
        const response = await youtubeApi.get("/search", {
            params:{
                q:keyword
            }
        });

        this.setState({
            videoMetaInfo:response.data.items,
            selectedVideoId:response.data.items[0].id.videoId
        })
    };


    render(){

        return(
            <div className="Youtube">
                <Search onSearch={this.onSearch}/>
                <VideoList onVideoSelected={this.onVideoSelected}
                data={this.state.videoMetaInfo}/>
                <VideoPlayer videoId={this.state.selectedVideoId}/>
            </div>
        );
    }
}