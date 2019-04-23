import {
  SELECT_PAINTING,
  DELETE_PAINTING,
  FETCH_PAINTINGS
} from './types'

import paintings from '../data/artworks'

const API_URL = 'http://localhost:3001/api/paintings'

export const fetchPaintings = () => {
  return (dispatch) => {
    fetch(API_URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch({type: FETCH_PAINTINGS, payload: paintings})
    })
  }
  // eventually this needs to be async

  // return fetch(API_URL).then(res => res.json()).then(data => {
  //   return {type: FETCH_PAINTINGS, payload: paintings}
  // })
  // return {type: FETCH_PAINTINGS, payload: []}
}

export const selectPainting = (paintingId) => {
  return {type: SELECT_PAINTING, payload: paintingId}
}

export const deletePainting = (paintingId) => {
  return {type: DELETE_PAINTING, payload: paintingId}
}
