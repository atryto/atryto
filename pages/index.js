// Packages
import React from 'react'

// Layouts
import App from '../layouts/app'

// UI
import { typography, colors, designTokens } from '../ui/theme'

// Root
import pkg from '../package'

const Home = () => (
  <App>
    <main>
      <div>
        <h1>{pkg.name}</h1>
        <h2>{pkg.description}</h2>
      </div>
    </main>

    <style jsx>{`
      main {
        display: flex;
        align-items: center;
        height: 100vh;
        width: 100%;
        text-align: center;
        justify-content: center;
      }

      h1 {
        font-size: ${typography.h100.fontSize};
        line-height: ${typography.h100.lineHeight};
        font-weight: ${typography.h100.fontWeight};
        margin-bottom: ${designTokens.spacing};
      }

      h2 {
        font-size: ${typography.h400.fontSize};
        line-height: ${typography.h400.lineHeight};
        font-weight: ${typography.h400.fontWeight};
        color: ${colors.gray.lighter};
      }
    `}</style>
  </App>
)

export default Home
