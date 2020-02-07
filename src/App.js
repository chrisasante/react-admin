import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList } from './Components/ListPosts';
import { PostEdit } from './Components/EditPosts';
import { PostCreate } from './Components/CreatePosts';

import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
  );

export default App;
