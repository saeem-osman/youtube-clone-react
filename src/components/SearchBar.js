import React from 'react'

class SearchBar extends React.Component{
    state = {
        term: ''
    }

    onChangeForm = (event) =>{
        this.setState({
            term: event.target.value
        })
       
    }

    onSubmitForm = event =>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

   

    render(){
        return(
            <div className="search-bar ui segment">
            
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                    <label> <h3 className="ui header">Video Search </h3> </label>
                    <div className="icon-bar">
                        <i className="huge red youtube icon"></i>
                        <input 
                            type="text" 
                            value = {this.state.term}
                            onChange = {this.onChangeForm}
                        />
                        <button className="ui red button">Submit</button>
                        </div>
                    </div>
                </form>
                

            </div>
        )
    }
}

export default SearchBar