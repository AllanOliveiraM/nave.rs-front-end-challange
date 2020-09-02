import client from 'providers/fetchClient'

export const getCards = () => client.get('/v1/navers')
