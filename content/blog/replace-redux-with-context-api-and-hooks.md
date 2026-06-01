---
title: A new coding approach to replace Redux with Context API and Hooks
slug: replace-redux-with-context-api-and-hooks
date: '2019-05-20'
canonicalUrl: https://blog.rklosowski.com/replace-redux-with-context-api-and-hooks/
---

![](/blog/images/2024/07/0_Muwxx05bEPznYIO5.webp)

*React + Hooks >= React + Redux ?*

After the recent launch of Hooks together with React 16.8, the discussions regarding the need for Redux started to appear everywhere, and we are here to answer or at least propose some thoughts on questions like:

> Does the addition of hooks mean that redux is no longer needed? Or do hooks still provide only per-component state management, instead of a top-down global state manager?

So, in order to dig into these questions with a practical example, we’ll create a simple Context Provider for handling user authentication and JWT token management, that replaces entirely the need of Redux, and that has been working well for me in most of my applications.

I hope the approach I’ll present helps you to answer some of these questions and possibly make your code cleaner and easier to read.

I’m looking forward to knowing your opinion on this!

In the code below, the login initial store is created, as well as the actions and reducers.

-   Initial State: Consists of a simple object that is responsible for initializing the store. It will handle the user login state, its token, if the login is loading and if any error occurred;
-   Reducer: If you are used to Redux, this should not scare you, as it is a simple function that returns a new state based on the previous state of the store, according to the Action dispatched and its Payload.
-   Actions: In order to make our code easier to read, we make the actions as a factory function, that takes the dispatch as a param and returns actions ready to be used.

After we have our actions and reducers defined, we only need to expose these properties globally to our application, nothing better than the context API to do that for us!

Important! Notice that our reducer is initialized simply by using the new useReducer hook, launched together with React 16.8. If you want, you can read more about this [here](https://reactjs.org/docs/hooks-intro.html).

With the store and the dispatcher returned by the useReducer hook, we can initialize our Context Provider with its props containing our whole store as well as the actions. Since the action factory already takes the dispatcher as a parameter, we’ll be able to use our actions without worrying about dispatch function, everything will be taken care under the hood.

Take some time to read and understand the code.

```javascript
import React, { createContext, useReducer } from 'react';
import * as types from 'constants/actionTypes';

const LoginContext = createContext();

const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        error: null,
        loading: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        error: null,
        loading: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        error: action.payload.error,
        loading: false,
      };
    case types.LOGIN_LOADING:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        error: null,
        loading: true,
      };
    default:
      console.log('WARNING -> Unknown reducer type.');
      return {
        ...state,
      };
  }
};

const actions = dispatch => {
  return {
    login: token =>
      dispatch({
        type: types.LOGIN,
        payload: {
          token,
        },
      }),
    logout: () =>
      dispatch({
        type: types.LOGOUT,
      }),
    loginError: error =>
      dispatch({
        type: types.LOGIN_ERROR,
        payload: {
          error,
        },
      }),
    loginLoading: () =>
      dispatch({
        type: types.LOGIN_LOADING,
      }),
  };
};

const LoginContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider
      value={{ ...state, dispatch, actions: actions(dispatch) }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
```

As our LoginContext exports a Context Provider, containing the store and actions as props, we need to make sure the all our application (or login related components) are wrapped by our provider.

This can be easily done as presented in the example below.

```javascript
import React from 'react';
import { LoginContextProvider } from 'contexts';

const App = () => {
  return (
    <LoginContextProvider>
      {/* Your Application Content Goes in here */}
    </LoginContextProvider>
  );
};

export default App;
```

Now I think it’s starting to make sense how all will fit together, and be shocked how clean and easy to read our code looks! 😱😱😱

Just import the LoginContext and console.log it, all your store will be there and your actions are simple functions ready to be used.

```javascript
import React, { useContext } from 'react';
import { LoginContext } from "contexts/LoginContext";

...

const signIn = async values => {
    const loginContext = useContext(LoginContext);
    try {
      const { email, password } = values;
      loginContext.actions.loginLoading();
      // Logs the user in...
      const { token, ...userData } = await authenticate(
        email,
        password
      );
      // Sets the login user token in the local storage
      await AsyncStorage.setItem('userToken', token);
      // Updates the contexts related to the login
      loginContext.actions.login(token);
    } catch (error) {
      // Logs the user out
      loginContext.actions.logout();
    }
  };
  
export default signIn;
```

Cool right?

Also, of course, there are a bunch of things that can be improved in this example, feel free to improve it.

### Pros

-   Your code looks cleaner
-   No need for all the Redux boilerplate
-   Easier to read
-   Faster development
-   No need for third-party libraries

### Cons

-   Separation of concerns, although you might split the reducer, actions, and provider into multiple files, this can become an issue depending on your team size
-   Less documentation for larger teams
-   No middlewares

* * *

Remember, there is no right or wrong solution for everything you do, just find what fits better for you and your team.

Thank you very much for reading this! 😃
