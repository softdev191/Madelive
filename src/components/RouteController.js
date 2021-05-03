import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import firebase from 'firebase/app'
import { authenticate } from  '../store/actions/authAction'

// Logint action
function login( button ){
  debugger
    // Set up the providers
    if( button == 'facebook' ) var provider = new firebase.auth.FacebookAuthProvider();
    if( button == 'twitter' ) var provider = new firebase.auth.TwitterAuthProvider();
    if( button == 'google' ) var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      debugger
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      authenticate()
      // ...
    })
    .catch(function(error) {
      debugger
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error);
    });

}

// Logint action
function logout( button ){
  console.log('Logging out.');
  firebase.auth().signOut();

}

class RouteController extends PureComponent {

  componentDidMount = () => {

    // Dropdowns
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'),{hover:true,constrainWidth:false,coverTrigger:false});

    // Modals
    M.Modal.init(document.querySelectorAll('.modal'));

    // Carousels
    M.Carousel.init(document.querySelectorAll('.carousel'));

    // Add TOCs for books
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));

    // Login Buttons
    document.querySelectorAll('.login').forEach(function(e){ e.addEventListener("click", (function(){ login( e.id ); })); });

    // Logout buttons
    document.querySelectorAll('.logout').forEach(function(e){ e.addEventListener("click", (function(){ logout(); })); });

    // Move the window to the top
    window.scrollTo(0, 0);

  }

  componentDidUpdate = prevProps => {
    
    // Rudamentary title and descriptions
    var title = this.props.location.pathname.split('/')[1];
        title =  title.charAt(0).toUpperCase() + title.slice(1);
        title = 'Made Live' + ((title.length>0) ? " | " : "") + title;

    document.getElementById('title').innerHTML = title;

    // UYpdate the banners
  	M.Carousel.init(document.querySelectorAll('.carousel'));
    
    // Scroll when not on the same page
    // if (this.props.location !== prevProps.location) window.scrollTo(0, 0);

  };

  render = () => this.props.children;
}

export default withRouter(RouteController);