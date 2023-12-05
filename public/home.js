function Home(){
  return (
    <>
    <img id='home-logo' className='mx-auto d-block img-fluid mt-5' src='images/logo.png'/>
    <h1 className="text-center mt-5">Welcome to MBank!</h1>
    <h3 className="text-center">Please Log in or create an account</h3>
    <div className='d-flex justify-content-center mt-5'>
      <a className='btn mr-3' style={{ backgroundColor: "#83C5BE", color: '#FFFFFF'}} href="#/login/" role="button">
        Log In
      </a>
      <a className='btn' style={{ backgroundColor: "#83C5BE", color: '#FFFFFF'}} href="#/CreateAccount/" role="button">
        Create Account
      </a>
    </div>
    </>
  );  
}

