import $ from 'jquery'

export default function fetchFilteredUsers(city) {
  const URL = 'http://localhost:3000/api/v1/locations/' + city
  return $.ajax({
    url:URL,
    type:"GET",
    data: JSON.stringify({
      city: city
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {

    return {
      type: 'FETCH_FILTERED_USERS',
      payload: response

    }
  })
}
