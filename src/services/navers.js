import client from 'providers/fetchClient'

export const getNavers = () => client.get('/v1/navers')

export const showNaver = id => client.get(`/v1/navers/${id}`)
