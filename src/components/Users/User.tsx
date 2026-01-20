import { useState } from "react";
import "./user.css";

interface User {
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          placeholder="User name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
        />
        <br />
        <label>
          Terms:&nbsp;
          <input type="checkbox" />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      {users.length > 0 && (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;
