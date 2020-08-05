import React from 'react'
import 'typeface-roboto'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}
const props = undefined
const ComponentWithError = () => <h1>{props.hola}</h1>

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError></ComponentWithError>
    </ErrorBoundary>
)

export const ErrorBoundaryWithOutError = () => (
    <ErrorBoundary>
        <h1>Sin error</h1>
    </ErrorBoundary>
)