// TEST
import got from 'got';
// function returns ids for all json objects in array
const dataURL = "https://dev-srjc-fall-2024-cs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/special";
export async function getAllIds() {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log({jsonstring: jsonString.body});
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);
// console.log({jsonObj})
const result = jsonObj.map(item => {
  return {
    params: {
      id: item.ID.toString()
    }
  }
})
console.log({result: JSON.stringify(result)})

  return result;
}

// function returns names and ids for all json objects in array, sorted by name property
export async function getSortedList() {
  let jsonString;
  try {
    console.log('fetching data inside getSortedList!')
    jsonString = await got(dataURL);
    
    console.log({jsonString: jsonString.body});
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
 
  const jsonObj = JSON.parse(jsonString.body);
  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getData(idRequested) {
  let jsonString;
  try {
   
    console.log('fetching data inside getData!')
    jsonString = await got(dataURL);
    
    console.log({jsonString: jsonString.body});
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  } 

  const jsonObj = JSON.parse(jsonString.body);

  // find object value in array that has matching id
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;
}