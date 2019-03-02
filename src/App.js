import React from 'react';
import { Admin, Resource } from 'react-admin';
import { StudentList } from './students/List';
import { StudentCreate } from './students/Create';
import { StudentEdit } from './students/Edit';
import jsonServerProvider from 'ra-data-json-server';
import Layout from "./Layout";

const dataProvider = jsonServerProvider('http://localhost:9000');

const App = () => (
    <Admin appLayout={Layout} dataProvider={dataProvider}>
        <Resource name="students" list={StudentList} edit={StudentEdit} create={StudentCreate} />
    </Admin>
);

export default App;
