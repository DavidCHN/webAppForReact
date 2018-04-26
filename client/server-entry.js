import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { useStaticRendering, Provider } from 'mobx-react'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './views/App'
import { createStoreMap } from './store/store'


useStaticRendering(true)

export default (stores, routerContext, sheetsRegistry, jss, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider sheetsRegistry={sheetsRegistry} jss={jss}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider >
)

export { createStoreMap }
