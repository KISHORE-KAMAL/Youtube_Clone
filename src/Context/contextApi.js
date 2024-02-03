import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from "../Utils/api"

export const Context = createContext();

export const AppContext = (props) => {

    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(()=>
    {
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData = (query)=>
    {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>
        {
            console.log(contents);
            setSearchResults(contents)
            setLoading(false)
        })
    }

  return (
    <Context.Provider value={{loading, setLoading, searchResults, setSearchResults, selectCategories, setSelectCategories, mobileMenu, setMobileMenu}}>
        {props.children}
    </Context.Provider>
  )
}