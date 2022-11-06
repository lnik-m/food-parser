const registerEndpoint = (path, method = 'get') => {
  return async (requestValues, headers = undefined) => {
    try {
      const response = await fetch(`/api/${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(headers ?? {})
        },
        body: JSON.stringify(requestValues)
      })
      if (!response.ok) {
        console.error(`API request to ${path} failed`)
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return { ok: false, response: undefined }
    }
  }
}

export const api = {
  food: {
    get: {
      getGroceries: registerEndpoint('/food')
    }
  },
  contact: {
    doSearch: registerEndpoint('/search', 'post')
  }
}
