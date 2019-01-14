// Packages
import React from 'react'

// Layouts
import App from '../layouts/app'

// UI
import { typography } from '../ui/theme'

const Home = () => (
  <App>
    <div>
      <h1>Atryto</h1>
    </div>

    <style jsx>{`
      div {
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
      }
    `}</style>
  </App>
)

export default Home
