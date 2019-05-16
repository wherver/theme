 import React,{ Component } from 'react'
 import ThemeSwitch from './ThemeSwitch'
 import PropTypes from 'prop-types'
 import { connect } from 'react-redux'

 class Content extends Component {
    static contextTypes = {
      themeColor: PropTypes.string
    }
  
    // constructor () {
    //   super()
    //   this.state = { themeColor: '' }
    // }
  
    // componentWillMount () {
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    //   }
  
    // _updateThemeColor () {
    //   const { store } = this.context
    //   const state = store.getState()
    //   this.setState({ themeColor: state.themeColor })
    // }
  
    render () {
      return (
        <div>
          <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
          <ThemeSwitch />
        </div>
      )
    }
  }
 const mapStateToProps=(state) => {
     return {
         themeColor:state.themeColor
     }
 }

 Content = connect(mapStateToProps)(Content)
export default Content