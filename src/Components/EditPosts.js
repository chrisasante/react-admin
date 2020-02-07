import React from 'react';

import { Edit, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           {/* The name of all the tables should be labelled "name" */}
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);
