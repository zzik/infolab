// ? blooper component

import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()
    console.error(error)

  return <>
    <h1>I MUST ERROR NOW</h1>
    <p>{error.statusText || error.message}</p>
  </>
  
}

export default ErrorPage