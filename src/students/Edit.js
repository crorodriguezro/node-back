import React from 'react';
import {Edit, SimpleForm, TextInput, DisabledInput} from 'react-admin';
import {DateInput} from 'react-admin-date-inputs';

export const StudentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <DateInput source="birthDate" label="Birth Date"/>
            <HobbiesField source="hobbies"/>
        </SimpleForm>
    </Edit>
);

const HobbiesField = ({record = {}, source}) => (
    <ul>
        {record[source].map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

HobbiesField.defaultProps = { label: 'Hobbies', addLabel: true, };

