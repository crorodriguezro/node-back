import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <DateInput source="birthDate" />
            <TextInput source="hobbies" />
        </SimpleForm>
    </Create>
);
