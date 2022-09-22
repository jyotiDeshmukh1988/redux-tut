import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'
import cardItems from '../service/reducers/reducer'

const mapStateToProps=state=>({
    cardItems: state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)