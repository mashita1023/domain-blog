/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './v1/blog'
// prettier-ignore
import { Methods as Methods1 } from './v1/blog/_id@string'
// prettier-ignore
import { Methods as Methods2 } from './v1/sitedata'
// prettier-ignore
import { Methods as Methods3 } from './v1/tag'
// prettier-ignore
import { Methods as Methods4 } from './v1/tag/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blog'
  const PATH1 = '/v1/sitedata'
  const PATH2 = '/v1/tag'
  const GET = 'GET'

  return {
    v1: {
      blog: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      sitedata: {
        get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      tag: {
        _id: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
        $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
