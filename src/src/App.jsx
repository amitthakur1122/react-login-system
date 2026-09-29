import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      const token = {
        userId: 101,
        role: "Admin"
      };

      localStorage.setItem("jwtToken", JSON.stringify(token));
      setUser(token);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  if (user) {
    return (
      <div className="box">
        <h1>Protected Dashboard</h1>
        <h2>Welcome, {user.role}!</h2>

        <p>User ID: {user.userId}</p>
        <p>Role: {user.role}</p>

        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="box">
      <h1>Login</h1>

      <form onSubmit={login}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p className="error">{error}</p>

      <small>Username: admin | Password: 1234</small>
    </div>
  );
}

export default App;
