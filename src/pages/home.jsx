import React from 'react'
import './app.less'
import * as actions from '../actions/counterActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component {
    componentDidMount() {
        this.props.getPlanetNum()
    }
    render() {
        const { PlanetNum } = this.props
        return (
            <div>
                <div className='planetBox'>
                    <div>Planet Count: {PlanetNum}</div>
                </div>
                <div className='planetBox'>
                    <div>
                        <Link to='/Mercury'>Mercury</Link>
                    </div>
                    <div>
                        <Link to='/Venus'>Venus</Link>
                    </div>
                    <div>
                        <Link to='/Earth'>Earth</Link>
                    </div>
                    <div>
                        <Link to='/Mars'>Mars</Link>
                    </div>
                    <div>
                        <Link to='/Jupiter'>Jupiter</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { PlanetNum: state.counterReducer.planetCount }
}

let getPlanetCount = {
    getPlanetNum: actions.countPlanet
}

export default connect(
    mapStateToProps,
    getPlanetCount
)(Home)
