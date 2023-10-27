'use client';
import React from 'react';
import '../../hive/styles/global.css';
import '../../hive/styles/style.css';
import '../../hive/styles/fonts.css';
// import TablePage from './TablePage'
import Datepickercomponent from '../../hive/pages/Datepickercomponent';
import AllProjecttable from '../../components/Childcomponent/AllProjecttable';
import Allviews from '../../components/Childcomponent/Allviews';

import Mytodos from '../../components/Childcomponent/Mytodos';
import PMIfollowups from '../../components/Childcomponent/PMIfollowups';
import Vendorfallowups from '../../components/Childcomponent/Vendorfallowups';
import Workcategories from '../../components/Childcomponent/Workcategories';
//import makeData from '../../components/Childcomponent/makeData'
import Myaccount from '../../components/Sidebar/Myaccount';
import SeperateAppBar from '../../components/Sidebar/SeperateAppBar';
import SeperateDrawer from '../../components/Sidebar/SeperateDrawer';
import Sidebarheader from './sideheaderbar/page';

function Dashboard() {
  return (
    <div>
      <header>
        <Sidebarheader />
      </header>

      {/* <body style={{backgroundColor:'#efefef'}}> */}
      <main style={{ backgroundColor: '#efefef' }}>
        {/* <TablePage /> */}
        {/* <TableComp /> */}
      </main>

      {/* </body> */}
    </div>
  );
}

export default Dashboard;
