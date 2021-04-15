import { GET_ORGS } from './types'
import axios from 'axios'

export const getOrgs = () => dispatch => {
    axios
      .get('http://localhost:5000/api/orgs')
      .then(res => dispatch({
        type: GET_ORGS, 
        payload: res.data
      }))
      .catch(err => 
        dispatch({
          type: GET_ORGS, 
          payload: null
        }))
      };
  