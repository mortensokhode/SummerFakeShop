import React from 'react'
// import axios from 'axios'
import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT, EMPTYOBJECT } from '../constantExports/globalConstants'
import IngressBox from '../components/IngressBox';
import IngressFrame from '../components/IngressFrame';
import FlipCard from '../components/FlipCard';

// const endpointInUse = "https://fakestoreapi.com/products/category/electronics" // supposed to be a prop

const flipIngress =    {id: "1",
variant: "click",
front: <IngressBox headline={'Front Heading - Electronics'} ingressText={'Dette er da altså Electronics-page front'} />,
back: <IngressBox headline={'Backside Heading - Electronics'} ingressText={'Dette er da altså Electronics-page bakside'} />}


export default class ShowActualPageClass extends React.Component {
    state = {
        count: 1,
        endpointInUse: this.endpointInUse,
        character: {},
        product: {},
        productCollection: [{}]
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    getProducts = (endpointInUse) => {
        fetch(`https://fakestoreapi.com/products/category/${endpointInUse}`)
            .then(res => res.json())
            .then(data => this.setState({ productCollection: [...this.state.productCollection, {product: data}]}))
    }
    // .then(data => this.setState({ productCollection: [...this.state.productCollection, {product: data}]}))
    // .then(data => this.setState({product: data}))

    componentDidMount() {
        this.getProducts(this.state.endpointInUse)
    }
    
    render() {
        return (
            <>
                <div className="counter">
                    {/* <button className="counter--minus" onClick={this.subtract}>–</button> */}
                    <div className="counter--count">
                        <h1>{this.state.productCollection[0]}</h1>
                    </div>
                    {/* <button className="counter--plus" onClick={this.add}>+</button> */}
                </div>
                <h1>{this.state.productCollection.length || "Loading..."}</h1>
            </>
        )
    }

    // const [fakeshopData, setFakeshopData] = useState([])

    // useEffect(() => {
    //     axios.get(endPointTest).then((response) => {
    //             setFakeshopData(response.data)
    //             })
    //         }, [])
    // render() {

    //     return (
    //     <>
    //         {fakeshopData.map(({ id, title, price, description, category }) => (
    //             <div className="IngressMain">
    //                 <h3 key={id}>Title {title} Price: {price}</h3><br />
    //                 <p>Description: {description}</p>
                    
    //                 <IngressFrame>
    //                     <FlipCard key={flipIngress.id} card={flipIngress} />
    //                 </IngressFrame>

    //                 <IngressFrame>
    //                     <FlipCard key={'2'} card={flipIngress} />
    //                 </IngressFrame>

    //             </div>
    //         ))}
    //     </>
    //     );
    // }
  }

  