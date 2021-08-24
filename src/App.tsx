import React from 'react'
import Router from './Router'
import GlobalStyle from './GlobalStyle'
import { RecoilRoot } from 'recoil'

const App = () => {
    return (
        <RecoilRoot>
            <Router/>
            <GlobalStyle/>
        </RecoilRoot>
    )
}

export default App