// Перепишите один из примеров раздела Цепочка промисов, 
// используя async/await вместо .then/catch:

async function loadJson(url) {
  const response = await fetch(url);
  
  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }

}

loadJson('no-such-user.json') // (3)
  .catch(console.log); // Error: 404