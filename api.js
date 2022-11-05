const registerEndpoint = (path, method = 'get') => {
  return (requestValues=null) => {
    const res = (method==='get') ? fetch(`/api/${path}`) :
      fetch(`/api/${path}`, {
        method,
        body: JSON.stringify(requestValues)
      })
    return res.then(r => r.json()).catch(err => alert(err.message))
  }
}


export const api = {
  food: {
    get: {
      getGroceries: registerEndpoint('/food'),
    },
  },
  contact : {
    checkContact: registerEndpoint('/contact', 'post'),
  },
}

