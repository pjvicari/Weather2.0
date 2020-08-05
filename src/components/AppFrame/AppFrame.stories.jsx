import React from 'react'
import 'typeface-roboto'
import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (<Router><AppFrame>Mi aplicación</AppFrame></Router>)