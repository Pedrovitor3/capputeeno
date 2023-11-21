import { FilterContext } from '@/context/filter-contex';
import { useContext } from 'react';

export function useFilter() {
  return useContext(FilterContext)
}