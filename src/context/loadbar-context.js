import React, { createContext, useContext, useRef } from 'react'

const LoadBarContext = createContext()

const useLoadBar = () => {
  const context = useContext(LoadBarContext)

  if (context === undefined) {
    throw new Error('useLoadBar must be used within a LoadBarProvider')
  }

  return context
}

const LoadBarProvider = props => {
  const loadBarRef = useRef(null)

  const loadBarContinuousStart = () => {
    loadBarRef.current.continuousStart()
  }

  const loadBarComplete = () => {
    loadBarRef.current.complete()
  }

  return <LoadBarContext.Provider value={{ loadBarRef, loadBarContinuousStart, loadBarComplete }} {...props} />
}

export { LoadBarProvider, useLoadBar }
