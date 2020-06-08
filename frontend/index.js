

fetch('http://localhost:3000/magazines')
  .then(response => response.json())
  .then(result => renderList(result))

  const mainList = document.getElementById('link-list')
  function renderList(data){
    data.forEach(magazine => {
      const name = document.createElement('li')
      name.innerHTML = `<a href='show.html?id=${magazine.id}'>${magazine.name}</a>`
      mainList.append(name)
    })
  }

fetch('http://localhost:3000/articles')
  .then(response => response.json())
  .then(result => addOptions(result))

function addOptions(articles){
  const select = document.getElementById('article-select')
  articles.map(article => {
    const option =document.createElement('option')
    option.innerText = article.title
    option.name = 'aritcle_id'
    option.value = article.id
    select.append(option)
  })
}