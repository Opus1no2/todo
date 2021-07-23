const useToken = () => {
  const TOKEN_KEY = '__token__'
  const set = (client, accessToken, uid) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify({ client, accessToken, uid }))
  }
  const get = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))
  }
  const unset = () => {
    localStorage.removeItem(TOKEN_KEY)
  }

  return {
    get,
    set,
    unset
  }
}

export default useToken
