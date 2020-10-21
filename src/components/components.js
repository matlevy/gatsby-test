import NewsArticle from './news-article'
import ContentPage from './content-page'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  'news-article': NewsArticle,
  'content-page': ContentPage,
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components