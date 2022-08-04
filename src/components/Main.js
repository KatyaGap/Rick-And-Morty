import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from './PostList';
import {
  clearFiltered,
  getFilteredThunk,
  getHeroesThunk,
} from '../redux/actions/hero';
import Filters from './Filters';

function Main() {
  const dispatch = useDispatch();
  const { heroes, filtered } = useSelector((state) => state);
  const [page, setpage] = useState(1);
  const [load, setload] = useState(true);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (load) {
      dispatch(getFilteredThunk({ page, filter }));
      setload(false);
      if (page < filtered.info.pages) {
        setpage((prev) => prev + 1);
      }
    }
  }, [load, filter]);

  function scrollhandler(e) {
    if (e.target.documentElement.scrollHeight
- e.target.documentElement.scrollTop - window.innerHeight < 100) {
      setload(true);
    }
  }

  useEffect(() => {
    dispatch(getHeroesThunk(page));
    document.addEventListener('scroll', scrollhandler);
    return () => document.removeEventListener('scroll', scrollhandler);
  }, []);

  const handleSetFilter = useCallback((name, value) => {
    dispatch(clearFiltered());
    setpage((prev) => 1);
    setload(true);
    setFilter((prev) => ({ ...prev, [name]: value }));
  });
  return (
    <div>
      <Filters heroes={heroes} handleSetFilter={handleSetFilter} />
      <PostList heroes={filtered} />
    </div>
  );
}

export default Main;
