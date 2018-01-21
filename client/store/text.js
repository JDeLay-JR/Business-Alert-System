import axios from 'axios'


export function postTextMessage (text) {
  console.log("HIT POSTTEXT")
  return function thunk() {
    console.log("HIT THUNK")
    console.log(text)
    return axios.post('/api/text', text)
    .then(res => console.log(res.data))
  }
}
