// Packages
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// UI
import Row from '../ui/row'
import { typography, colors } from '../ui/theme'

import pkg from '../package'

const App = ({ children }) => {
  return (
    <main>
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>
      </Head>

      <section>
        <Row>{children}</Row>
      </section>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Avenir Next', 'SF UI Display', 'Helvetica Neue',
            'Helvetica', 'Arial', 'sans-serif';
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        body {
          background-color: ${colors.white};
          color: ${colors.black};
        }

        strong {
          font-weight: ${typography.h200.fontWeight};
        }
      `}</style>
    </main>
  )
}

App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App
