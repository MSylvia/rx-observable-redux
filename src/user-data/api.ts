// Fake api for testing

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50/50 change of failure.
      if(Math.random() >= 0.5){
       return resolve(people)
      } else {
        return reject("Request Failed.")
      }  
    }, 1000)
  })
}