import React, { useState, useCallback, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import WelcomePage from './pages/WelcomePage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const [allDataChar, setDataChar] = useState({})
    const [allForecastItemList, setForecastItemList] = useState({})
    const onSetAllWeather = useCallback((weatherCity) => { setAllWeather(allWeather => ({ ...allWeather, ...weatherCity })) }, [setAllWeather])
    const onSetDataChar = useCallback((cityData) => { setDataChar(allDataChar => ({ ...allDataChar, ...cityData })) }, [setDataChar])
    const onSetForecastItemList = useCallback((cityForecastItem) => { setForecastItemList(allForecastItemList => ({ ...allForecastItemList, ...cityForecastItem })) }, [setForecastItemList])
    const actions = useMemo(() => ({ onSetAllWeather, onSetDataChar, onSetForecastItemList }), [onSetAllWeather, onSetDataChar, onSetForecastItemList])
    const data = useMemo(() => ({ allWeather, allDataChar, allForecastItemList }), [allWeather, allDataChar, allForecastItemList])
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage></WelcomePage>
                </Route>
                <Route exact path="/main">
                    <MainPage data={data} actions={actions}></MainPage>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions}></CityPage>
                </Route>
                <Route>
                    <NotFoundPage></NotFoundPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
