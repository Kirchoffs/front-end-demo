import React from "react";

export default function UserList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const style = {
    paddingLeft: "20px",
    color: "SteelBlue"
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <button className="btn-primary" onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      <br/>
      <div style={style}>
        {error && <div style={{ color: "red" }}>Failed: {String(error)}</div>} <br/>
        <ul>
          {
              users.length > 0 && users.map(user => <li key={user.id}>{user.first_name}</li>)
          }
        </ul>
      </div>
    </div>
  )
}