import React from 'react'
import listContext from './listContext'
import PropTypes from 'prop-types'

const ProvideList = ({ listId, children }) => {
  return (
    <listContext.Provider value={listId}>
      {children}
    </listContext.Provider>
  )
}

ProvideList.propTypes = {
  listId: PropTypes.number,
  children: PropTypes.any
}

export default ProvideList
