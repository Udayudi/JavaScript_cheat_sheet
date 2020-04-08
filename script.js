fetch('https://reqres.in/api/users/', {

        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          name: 'User 1'
        })
  })
  .then(res =>  {
      return res.json()
  })
  .then(d => console.log(d))
  .catch(err => console.log('err'))
  

