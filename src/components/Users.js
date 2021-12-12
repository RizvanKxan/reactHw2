import React, {useEffect, useState} from "react";
import axios from "axios";

const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [filter, setFilter] = useState([]);
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setFilter(users);
  }, [users])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const people = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(people.data)
  }


  const onChange = (e) => {
    const field = e.target.id
    setUser({...user, [field]: e.target.value})
  }
  const addUser = (e) => {
    e.preventDefault()
    setUsers([...users, {...user, id: Math.random() * 10}])
    setUser(
      {
        name: '',
        phone: '',
        email: '',
      }
    )
  }
  const deleteUser = (id) => {
    const confirm = window.confirm('Вы что-ли реально удалите?')
    if (confirm) {
      setUsers(users.filter((u) => u.id !== id))
    }
  }
  const search = (e) => {
    console.log(e.target.value)
    const findValue = e.target.value
    if (findValue) {
      setFilter(users.filter((u) => u.name.toLowerCase().includes(findValue.toLowerCase())))
    } else {
      setFilter(users);
    }
  }
  console.log(users)
  return (
    <div className="container">
      <button onClick={() => setShowAddUser(!showAddUser)} className="right btn waves-effect waves-light" type="submit"
              name="action">Add User
        <i className="material-icons right">account_box</i>
      </button>
      {showAddUser && <form className="co s6" onSubmit={addUser}>
        <div className="col s6">
          <div className="input-field row s6">
            <i className="material-icons prefix">account_circle</i>
            <input onChange={onChange} id="name" value={user.name} required placeholder="input name" type="text"
                   className="validate"/>
          </div>
          <div className="input-field row s6">
            <i className="material-icons prefix">phone</i>
            <input onChange={onChange} id="phone" value={user.phone} required placeholder="input phone" type="tel"
                   className="validate"/>
          </div>
          <div className="input-field row s6">
            <i className="material-icons prefix">email</i>
            <input onChange={onChange} id="email" value={user.email} required placeholder="input email" type="email"
                   className="validate"/>
          </div>
          <button className="right btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">add_box</i>
          </button>
        </div>
      </form>}

      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input onChange={search} id="search" required placeholder="input name user for search" type="text"
                 className="validate"/>
        </div>
      </div>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
        </thead>

        <tbody>
        {filter && filter.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><i onClick={() => deleteUser(user.id)} className="material-icons">delete</i></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
