import React from 'react';
import Header from './components/header/index';
import DashboardMain from './components/dashboardmain/index';
import CategoryList from './components/categorylist/index';
import AddTopic from './components/addtopic/index';
import AddCategory from './components/addcategory/index';
import EditCategory from './components/editcategory/index';
//import RemoveTopic from './components/removetopic/index';
import {useRoutes} from 'hookrouter';

import './App.css';

const routes = {
  '/categorylist': () => <CategoryList /> ,
  '/addtopic': () => <AddTopic />,
  '/addcategory': () => <AddCategory />,
  '/editcategory': () => <EditCategory />
};

const App = () => {

  const routeResult = useRoutes(routes);
  console.log('routerresult' + routeResult);
  let main;
   if(!routeResult)
   {
    main= <DashboardMain/>
   }
    return (  
    <div>
      <Header />
       
      {/* <CategoryList/> */}
      {/* <AddTopic/> */}
      {routeResult}
      {main}
      {/* <RemoveTopic/> */}
    </div>
    );
}

export default App;
