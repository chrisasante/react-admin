import React from 'react';

import { List, Datagrid, TextField,  EditButton, DeleteButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
       <Datagrid>
           <TextField source="id" />
            {/* The name of all the tables should be labelled "name" */}
            <TextField source="title" />
           <EditButton />
           <DeleteButton />
        </Datagrid>
    </List>
);
