function AllData() {
    const [data, setData] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    React.useEffect(() => {
        fetch(`/account/findOne/${ctx.users.email}`)
          .then(response => response.text())
          .then(text => {
            try {
              const data = JSON.parse(text);
              setName(data.name);
              setEmail(data.email);
              setPassword(data.password);
              setBalance(data.balance); // Assuming balance is a property in the response
              console.log('JSON:', data);
            } catch (err) {
              console.log('err:', text);
            }
          });
      }, []);
  
    const togglePasswordVisibility = () => {
      setShowPassword(prevShowPassword => !prevShowPassword);
    };
  
    return (
        <Card
      bgcolor="#006D77"
      header="Balance"
      body={
        <div>
          <h5>My Profile:</h5>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Password:</strong>{' '}
          {showPassword ? password : '********'}
          <button
            type="button"
            className="btn"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Reveal'} Password
          </button>
        </div>
        <div>
          <strong>Balance:</strong> {balance}
        </div>
        </div>
      }
    />
    );
  }
  