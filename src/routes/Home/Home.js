import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import { getNavers } from 'services/navers'
import { toast } from 'react-toastify'

import CardSection from 'components/CardSection'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const Home = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  const validateUseData = data => {
    if (Array.isArray(data)) {
      if (data.length) {
        setCards(data)
        setLoading(false)
      } else {
        toast.info(lang.toasts.noCards)
        setLoading(false)
      }
    } else {
      toast.error(lang.toasts.cantResolveDataFromServer)
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getNavers()
        validateUseData(data)
      } catch {
        toast.error(lang.toasts.cantConnectWithServer)
      }
    }
    fetchCards()
  }, [])

  return (
    <>
      <Helmet>
        <title>{lang.document.titles.homePage}</title>
      </Helmet>
      <CardSection isLoading={loading} cards={cards} />
    </>
  )
}

export default Home
