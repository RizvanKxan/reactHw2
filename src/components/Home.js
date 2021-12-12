import React, { useEffect, useState } from "react";

const Home = () => {
  const [showEditUser, setShowEditUser] = useState(false);
  const [user, setUser] = useState({
    firstName: "Леонид",
    secondName: "Громыко",
    phone: "+375293623112",
    dateOfBirth: "12-08-1992",
    email: "Darkk-raizer@mail.ru",
    password: "11111",
  });

  const onChange = (e) => {
    const field = e.target.id;
    setUser({ ...user, [field]: e.target.value });
  };

  return (
    <div>
      <h1>Home Page.</h1>
      <div class="row">
        <div class="col m2">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg" alt="Упс. Изображение где-то затерялось..."/>
            </div>
          </div>
        </div>
      </div>
      <div class="collUser">
        <table class="highlight t1" height="120">
          <tbody>
            <tr>
              <td>Имя</td>
              <td>{user.firstName}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="firstName"
                  value={user.firstName}
                  required
                  placeholder="input firstName"
                  type="text"
                  className="validate"
                />
              )}
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{user.secondName}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="secondName"
                  value={user.secondName}
                  required
                  placeholder="input secondName"
                  type="text"
                  className="validate"
                />
              )}
            </tr>
            <tr>
              <td>Телефон</td>
              <td>{user.phone}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="phone"
                  value={user.phone}
                  required
                  placeholder="input phone"
                  type="text"
                  className="validate"
                />
              )}
            </tr>
            <tr>
              <td>Дата рождения</td>
              <td>{user.dateOfBirth}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="dateOfBirth"
                  value={user.dateOfBirth}
                  required
                  placeholder="input dateOfBirth"
                  type="text"
                  className="validate"
                />
              )}
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>{user.email}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="email"
                  value={user.email}
                  required
                  placeholder="input email"
                  type="text"
                  className="validate"
                />
              )}
            </tr>
            <tr>
              <td>Пароль</td>
              <td>{user.password}</td>
              {showEditUser && (
                <input
                  onChange={onChange}
                  id="password"
                  value={user.password}
                  required
                  placeholder="input password"
                  type="password"
                  className="validate"
                />
              )}
            </tr>
          </tbody>
        </table>
        <a
          class="waves-effect waves-light btn-large f1"
          onClick={() => setShowEditUser(!showEditUser)}
        >
          {" "}
          <i class="material-icons left">edit</i>Edit
        </a>
      </div>
    </div>
  );
};

export default Home;
