export const fetcher = (...args) => {
  return fetch(...args, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}