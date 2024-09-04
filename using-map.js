const citiesOnly = (arr) => {
    let a = []
    let arr1 = arr.map((x) => {
        a.push(x.city)
    })
    return a
}

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]))