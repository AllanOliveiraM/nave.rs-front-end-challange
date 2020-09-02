import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import { getCards } from 'services/navers'
import { toast } from 'react-toastify'

import CardContainer from 'components/CardContainer'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const Home = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards()
        if (Array.isArray(data)) {
          if (data.length) {
            setCards(data)
            setLoading(false)
          } else {
            toast.info(lang.toasts.noCards)
          }
        } else {
          toast.error(lang.toasts.cantConnectWithServer)
        }
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
      <CardContainer loading={loading} cards={cards} />
    </>
  )
}

export default Home
