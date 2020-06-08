const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/magazines/${id}`) 
  .then(response => response.json())
  .then(result => handleInfo(result))

function handleInfo(info){
  renderMagazineInfo(info.name, info.category)
  renderArticleList(info.articles)
}

const showMain = document.getElementById('show-main')
function renderMagazineInfo(name, category){
  const $name = document.createElement('h2')
  $name.innerText = name

  const $category = document.createElement('h3')
  $category.innerText = category

  showMain.append($name, $category)
}

function renderArticleList(articles){
  articles.forEach(article => {
    const title = document.createElement('li')
    title.innerHTML = `<a href='articleShow.html?id=${article.id}'>${article.name}</a>`
    showMain.append(title)
  })
  
}