import { stringify } from 'query-string'
const BASE_URL = 'http://api.quotable.io';

export const getAllAuthors = async () => {
  const response = await fetch('https://api.quotable.io/authors?limit=10&skip=20');
  const authors = await response.json();
  console.log(authors); 
  return authors.results;
};

async function paginatedRequest(path, { page = 1, resultsPerPage, ...params }) {
    const limit = Math.floor(resultsPerPage) || 1
    const skip = (page - 1) * limit
    const query = stringify({ limit, skip, ...params })
    const response = await fetch(`${BASE_URL}${path}?${query}`)
    const { count, totalCount, results, lastItemIndex } = await response.json()
    const totalPages = Math.ceil(totalCount / limit)
    const hasNextPage = lastItemIndex
    const hasPreviousPage = page > 1
    return {
      count,
      totalCount,
      page,
      hasNextPage,
      hasPreviousPage,
      totalPages,
      results,
    }
  }
  
  export const quotes = async function quotes(args = {}) {
    return paginatedRequest('/quotes', args)
  }
  
  export const authors = async function authors(args = {}) {
    return paginatedRequest('/authors', args)
  }
  
  export const random = async function random(params) {
    const res = await fetch(`${BASE_URL}/random?${stringify(params)}`)
    const data = await res.json()
    return data
  }


