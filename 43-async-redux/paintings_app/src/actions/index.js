import {
  SELECT_PAINTING,
  DELETE_PAINTING,
  FETCH_PAINTINGS
} from './types'

import paintings from '../data/artworks'

export const fetchPaintings = () => {
  return {type: FETCH_PAINTINGS, payload: paintings}
}

export const selectPainting = (paintingId) => {
  return {type: SELECT_PAINTING, payload: paintingId}
}

export const deletePainting = (paintingId) => {
  return {type: DELETE_PAINTING, payload: paintingId}
}
