import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddAliments from './AddAliments'
import AddCategorieAliment from './AddCategorieAliment'
import AddCategorieRecipe from './AddCategorieRecipe'
import AlimentsDetail from './AlimentsDetail'
import InterfaceAddRecipes from './InterfaceAddRecipes'
import InterfaceAliments from './InterfaceAliments'
import InterfaceArticles from './InterfaceArticles'
import InterfacePages from './InterfacePages'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import MenuInterface from './MenuInterface'
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
        <Route
          exact
          path='/admin/recipes/add'
          component={InterfaceAddRecipes}
        />
        <Route
          exact
          path='/admin/recipes/add_categorie'
          component={AddCategorieRecipe}
        />
        <Route path='/admin/recipes/:id' component={RecipesDetail} />
        <Route exact path='/admin/aliments' component={InterfaceAliments} />
        <Route path='/admin/aliments/add' component={AddAliments} />
        <Route
          path='admin/aliments/add_categorie'
          component={AddCategorieAliment}
        />
        <Route path='admin/aliments/:id' component={AlimentsDetail} />
        <Route exact path='/admin/podcasts' component={InterfacePodcasts} />
        <Route exact path='/admin/articles' component={InterfaceArticles} />
      </Switch>
    </div>
  )
}

export default AdminInterfaceHome
