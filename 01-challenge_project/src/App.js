import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserInfo = (uName, uAge, uId) => {
    setUsersList((prevUser) => {
      return [...prevUser, {name:uName, age:uAge, id:uId}];
    });
  };

  return (
    <div>
      <AddUser onSubmitUserInfo={addUserInfo} />
      <UserList users={usersList}/>
    </div>
  );
}

export default App;