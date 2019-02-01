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
                    <label>Video Search</label>
                        <input 
                            type="text" 
                            value = {this.state.term}
                            onChange = {this.onChangeForm}
                        />
                    </div>
                </form>
                <h1>{this.state.term}</h1>

            </div>
        )
    }
}

export default SearchBar