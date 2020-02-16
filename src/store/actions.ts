import { Dispatch } from 'react';
import { IAction } from './types';

const {
    REACT_APP_FLICKR_URL,
    REACT_APP_CORS_ANYWHERE
} = process.env;

// function to fetch the API and returns a dispatch with the json formatted data
export const fetchDataAction = async (dispatch: Dispatch<IAction>, tags: string) => {
    const data = await fetch(`${REACT_APP_CORS_ANYWHERE}/${REACT_APP_FLICKR_URL}?format=json&nojsoncallback=true&tags=${tags}`);
    const dataJSON = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    });
};
  