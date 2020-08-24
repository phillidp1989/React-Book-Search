import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { UserContext } from '../Context/UserState';

function LoginPrivate({ component: Component, ...rest }) {
  const { user, isLoaded } = useContext(UserContext);  
  return (
    <Route {...rest} render={props => {
      if(user && isLoaded) {
        console.log('redirecting to /search');
        return <Redirect to={{ pathname: '%PUBLIC_URL%/search', state : {from: props.location} }}/>
      }
      console.log('rendering original component');
      return <Component {...props}/>
    }}/>
  )
}

export default LoginPrivate