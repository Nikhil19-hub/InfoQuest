import React from 'react'
import {Switch, Route, RedirectFunction, Routes, BrowserRouter} from 'react-router-dom'
import { Search } from './Search'

export const Routes = () => {
  return (
    <>
    <Routes>
        <Route path='/'/>
        <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
  )
}
