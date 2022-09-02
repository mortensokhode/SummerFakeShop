import React, {Component} from "react"

class DataFetcher extends Component {
    
    state = {
        loading: false,
        data: null,
        givenURL: null,
        productArray: []
    }
    
    componentDidMount() {
        console.log("DF did mount. URL: ", this.props.url)
        this.setState({loading: true})

        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false, givenURL: this.props.url}))
            
            .catch(error => console.log(error))
    }
    
    render() {
        return (
            this.props.children(this.state.data, this.state.loading, this.state.givenURL)
        )
    }
}

export default DataFetcher