import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import WelcomePage from './pages/WelcomePage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const initialValue = {
        allWeather: {},
        allDataChar: {},
        allForecastItemList: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_ALL_WEATHER':
                const weatherCity = action.payload
                const newAllWeather = { ...state.allWeather, ...weatherCity }
                return { ...state, allWeather: newAllWeather }
            case 'SET_CHART_DATA':
                const cityData = action.payload
                const newAllDataChar = { ...state.allDataChar, ...cityData }
                return { ...state, allDataChar: newAllDataChar }
            case 'SET_FORECAST_ITEM_LIST':
                const cityForecastItem = action.payload
                const newAllForecastItemList = { ...state.allForecastItemList, ...cityForecastItem }
                return { ...state, allForecastItemList: newAllForecastItemList }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage></WelcomePage>
                </Route>
                <Route exact path="/main">
                    <MainPage data={state} actions={dispatch}></MainPage>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={state} actions={dispatch}></CityPage>
                </Route>
                <Route>
                    <NotFoundPage></NotFoundPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
