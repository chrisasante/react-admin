import React from 'react';

import { Create, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* The name of all the tables should be labelled "name" */}
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);