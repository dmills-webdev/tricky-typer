import splitWords from "./wordlist"

const testList = () => {
  const newTestList = []

  for  (let i = 0; i < 500; i++) {
    let n = Math.floor(Math.random()*1000)
    newTestList.push( String(splitWords[n]).toLowerCase() ) // Import words, ensure they are string, and force toLowerCase
  }
  return newTestList
}

export default testList
