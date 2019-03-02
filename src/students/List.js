import React from 'react';
import {List, Datagrid, TextField, DateField, CardActions, CreateButton} from 'react-admin';

export const StudentList = props => (
    <List {...props} actions={<ListActions/>} pagination={null}>
        <Datagrid rowClick="edit">
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <DateField source="birthDate"/>
        </Datagrid>
    </List>
);

const ListActions = ({basePath}) => (
    <CardActions>
        <CreateButton basePath={basePath}/>
    </CardActions>
);
