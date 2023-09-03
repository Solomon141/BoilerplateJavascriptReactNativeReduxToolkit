import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const LoadingPage = (props) => {
  return (
    <div>LoadingPage</div>
  )
}

LoadingPage.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage)