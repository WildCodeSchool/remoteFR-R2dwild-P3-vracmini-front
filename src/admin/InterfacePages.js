/* eslint-disable react/no-unescaped-entities */
import { NavLink, Switch, Route } from 'react-router-dom'

import PageFourneauxAdmin from './PageFourneauxAdmin'
import PageVracCoAdmin from './PageVracCoAdmin'

import './InterfacePages.css'

const InterfacePages = () => {
  return (
    <div className='interface-pages'>
      <div className='interface-pages-nav'>
        <ul>
          <li>
            <NavLink
              to='/admin/pages/vrac_co'
              className='nav-pages'
              activeClassName='nav-pages-selected'
            >
              Vrac'N Co
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin/pages/fourneaux'
              className='nav-pages'
              activeClassName='nav-pages-selected'
            >
              Aux Fourneaux
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/admin/pages/vrac_co' component={PageVracCoAdmin} />
        <Route
          exact
          path='/admin/pages/fourneaux'
          component={PageFourneauxAdmin}
        />
      </Switch>
    </div>
  )
}

export default InterfacePages
