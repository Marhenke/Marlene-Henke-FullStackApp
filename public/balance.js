function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [balance, setBalance] = React.useState('');
  const ctx = React.useContext(UserContext); 

  React.useEffect(() => {
    fetch(`/account/findOne/${ctx.users.email}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          setStatus(text);
          setShow(false);
          setBalance(data.balance); // Assuming balance is a property in the response
          console.log('JSON:', data);
        } catch (err) {
          setStatus(text);
          console.log('err:', text);
        }
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <Card
      bgcolor="#E29578"
      header="Balance"
      status={status}
      body={
        <div>
          <p>Your Balance: {balance}</p>
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              setShow(true);
              setStatus('');
            }}
          >
            Check balance again
          </button>
        </div>
      }
    />
  );

}





  
