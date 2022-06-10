import { useEffect, useRef, useReducer } from 'react';
import { REACT_APP_API_KEY } from './requests';
import axios from 'axios';

/**
 * useFetch UTIL
 * @param 	{string} 	  url		[external server url (tvdb)]
 * @returns {string}   	  state		[loading || fetched || error]
 */
export const useFetch = (url) => {
  const cache = useRef({});

  const initialState = {
    status: '',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOADING':
        return { ...initialState, status: 'loading' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: 'LOADING' });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        try {
          const request = await axios.get(url, {
            params: {
              api_key: REACT_APP_API_KEY,
            },
          });
          const data = request.data.results;
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: 'ERROR', payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
