import "./App.css";
function App() {
  return (
    <div className="logo-box">
      <img src="./twitter-x.png" alt="apple" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src="./google.png" alt="apple" />
        Sign in with Google
      </button>
      <button>
        <img src="./apple.png" alt="apple" />
        Sign in with Google
      </button>
      <hr></hr>
      <span>Or</span>
      <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't have an account<a href="signup">Sign up</a>
      </p>
    </div>
  );
}
export default App;
