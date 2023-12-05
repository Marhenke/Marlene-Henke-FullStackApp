function NavBar() {
  const ctx = React.useContext(UserContext);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("User is not logged in");
      }
    });

    return () => unsubscribe(); // Cleanup the observer when the component unmounts
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img id='nav-logo' src='images/logo.png'/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!user ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/">
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login/">
                  Login
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/balance/">
                  Balance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleLogout()}
                >
                  Log Out
                </a>
              </li>
              <li className="nav-item ml-5">
                <a className="navbar-text">Hi {ctx.users.name}!</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

function handleLogout() {
  // Implement logout logic
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User signed out");
      // You may want to redirect or perform additional actions after logout
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}
