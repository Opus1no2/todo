const useToken = () => {
  const TOKEN_KEY = '__token__'
  const set = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
  }
  const get = () => {
    return localStorage.getItem(TOKEN_KEY)
  }
  const unset = () => {
    localStorage.removeItem(TOKEN_KEY)
  }
  const save = (authHeader) => {
    const token = authHeader.split('Bearer').pop().trim()
    set(token)
  }

  return {
    get,
    save,
    unset
  }
}

export default useToken
