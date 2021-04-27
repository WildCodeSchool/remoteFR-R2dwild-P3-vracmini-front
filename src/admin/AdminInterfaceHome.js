import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import AddAliments from './AddAliments'
import AddArticles from './AddArticles'
import AddCategorieAliment from './AddCategorieAliment'
import AddCategorieArticle from './AddCategorieArticle'
import AddCategoriePodcast from './AddCategoriePodcast'
import AddCategorieRecipe from './AddCategorieRecipe'
import AddPodcast from './AddPodcast'
import AddRecipes from './AddRecipes'
import AlimentsDetail from './AlimentsDetail'
import ArticlesDetail from './ArticlesDetail'
import InterfaceAliments from './InterfaceAliments'
import InterfaceArticles from './InterfaceArticles'
import InterfacePages from './InterfacePages'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import MenuInterface from './MenuInterface'
import PodcastDetail from './PodcastDetail'
import RecipesDetail from './RecipesDetail'

import './AdminInterfaceHome.css'

const AdminInterfaceHome = prevProps => {
  useEffect(() => {
    prevProps.setDisplayHeader(false)
  }, [])
  return (
    <div className='interface-home'>
      <MenuInterface setDisplayHeader={prevProps.setDisplayHeader} />
      <Switch>
        <Route path='/admin/pages' component={InterfacePages} />
        <Route exact path='/admin/recipes' component={InterfaceRecipes} />
        <Route path='/admin/recipes/add' component={AddRecipes} />
        <Route
          path='/admin/recipes/add_categorie'
          component={AddCategorieRecipe}
        />
        <Route path='/admin/recipes/:id' component={RecipesDetail} />
        <Route exact path='/admin/aliments' component={InterfaceAliments} />
        <Route path='/admin/aliments/add' component={AddAliments} />
        <Route
          path='/admin/aliments/add_categorie'
          component={AddCategorieAliment}
        />
        <Route path='/admin/aliments/:id' component={AlimentsDetail} />
        <Route exact path='/admin/podcasts' component={InterfacePodcasts} />
        <Route exact path='/admin/podcasts/add' component={AddPodcast} />
        <Route
          exact
          path='/admin/podcasts/categorie'
          component={AddCategoriePodcast}
        />
        <Route exact path='/admin/podcasts/:id' component={PodcastDetail} />
        <Route exact path='/admin/articles' component={InterfaceArticles} />
        <Route exact path='/admin/articles/add' component={AddArticles} />
        <Route
          exact
          path='/admin/articles/categorie'
          component={AddCategorieArticle}
        />
        <Route exact path='/admin/articles/:id' component={ArticlesDetail} />
      </Switch>
    </div>
  )
}

export default AdminInterfaceHome
