import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Store } from '../store';
import { fetchDataAction } from '../store/actions';
import { FeedInfo } from './Feed/feed'; 

const App = () => {
  const { state, dispatch } = useContext(Store);
  const [ tag, setTag ] = useState('');

  // Fetches default data on mount
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      fetchDataAction(dispatch, tag);
    }

    return () => { ignore = true; }
  }, [tag, dispatch]);
  
  const fetchNewData = (newTag: string) => {
    setTag(newTag);
  }
  
  return (
    <div className="App">
      <input className="app-input-search" type="text" value={tag} onChange={ (e: any) => fetchNewData(e.target.value) } />
      <FeedInfo feed={state && state.feed} /> 
    </div>
  );
}

export default App;
