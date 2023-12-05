function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    
  const ctx = React.useContext(UserContext);

  return (
    <>
    <Card
      bgcolor="#83C5BE"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus} ctx={ctx}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus} ctx={ctx}/>}
    />
    </>
  ) 
}

function LoginMsg(props){
  
  const ctx = React.useContext(UserContext);
  callAuthRoute();
  
  return(<>
    <h5>Hi {ctx.users.name}, welcome to MBank!</h5>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function handle(){
    
    const auth  = firebase.auth();      
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));


    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);

            ctx.users = data;
            console.log(JSON.stringify(ctx))

            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });

  }


  return (<>

    <h5>Email</h5>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <h5>Password</h5>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}

function callAuthRoute() {
  // Check if the user is signed in
  const user = firebase.auth().currentUser;
  if (user) {
    // User is signed in, get the ID token
    user.getIdToken()
      .then((idToken) => {
        console.log('idToken:', idToken);

        (async () => {
          let response = await fetch('/auth', {
            method: 'GET',
            headers: {
              'Authorization': idToken
            }
          });
          let text = await response.text();
          console.log('response:', response);
        })();
      })
      .catch((error) => console.log('Error getting ID token:', error));
  } else {
    console.log('User is not signed in');
  }
}
