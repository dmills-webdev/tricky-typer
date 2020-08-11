import splitWords from "./wordlist"

const testList = () => {
  let newTestList = []
  for  (let i = 0; i < 500; i++) {
    let n = Math.floor(Math.random()*1000)
    newTestList.push(splitWords[n])
  }
  return newTestList
}

export default testList
