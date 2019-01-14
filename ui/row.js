// Packages
import React from 'react'
import PropTypes from 'prop-types'

// UI
import { designTokens } from './theme'

const Row = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          width: 100%;
          max-width: 1000px;
          padding-left: ${designTokens.spacing.large};
          padding-right: ${designTokens.spacing.large};
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.any.isRequired
}

export default Row
