import {
  SELECT_PAINTING,
  DELETE_PAINTING
} from './types'

const selectPainting = (painting) => {
  return {type: SELECT_PAINTING, payload: painting}
}

const deletePainting = (paintingId) => {
  return {type: DELETE_PAINTING, payload: paintingId}
}

export default {
  selectPainting,
  deletePainting
}
