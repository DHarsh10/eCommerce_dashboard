import { useRouteError } from 'react-router-dom'

import React from 'react'

const Error = () => {

    const err =  useRouteError();
    console.log(err);
    console.log(err)
  return (
    <div>
        <h1>oops!!</h1>
        <h2>Something went wrong</h2>

        <h2><b>{err.status}: {err.statusText}</b></h2>
        <b>{err.data}</b>
    </div>
  )
}

export default Error