import { Redirect } from "expo-router";
import React from 'react'

const index = () => {
  return (
    <Redirect href={"/(Auth)/getStarted"}/>
  )
}

export default index