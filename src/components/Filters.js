import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHeroesThunk,
} from '../redux/actions/hero';

import FilterChip from './FilterChip';

export default function Filters({ handleSetFilter }) {
  const { heroes } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 1; i <= 42; i += 1) {
      dispatch(getHeroesThunk(i));
    }
  }, []);

  function getParams(arr, key) {
    const result = [];
    arr.forEach((el, i) => {
      if (!result.includes(arr[i][key])) result.push(arr[i][key]);
    });
    return result;
  }

  return (
    <form style={{ width: '100%' }}>
      <div className="filters-paper">
        <Stack id="filters">
          <FilterChip
            filterName="name"
            name="name"
            options={getParams(heroes.results, 'name')}
            handleSetFilter={handleSetFilter}
          />
          <FilterChip
            filterName="status"
            name="status"
            options={getParams(heroes.results, 'status')}
            handleSetFilter={handleSetFilter}
          />
          <FilterChip
            filterName="species"
            name="species"
            options={getParams(heroes.results, 'species')}
            handleSetFilter={handleSetFilter}
          />
          <FilterChip
            filterName="type"
            name="type"
            options={getParams(heroes.results, 'type')}
            handleSetFilter={handleSetFilter}
          />
          <FilterChip
            filterName="gender"
            name="gender"
            options={getParams(heroes.results, 'gender')}
            handleSetFilter={handleSetFilter}
          />
        </Stack>
      </div>
    </form>
  );
}
