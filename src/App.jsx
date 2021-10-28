import React from 'react';
import * as Hyperverse from '@decentology/hyperverse';

const hyperversePromise = Hyperverse.initialize({
  blockchain: 'Flow',
  network: 'Mainnet'
});

function App() {
  const flow = Hyperverse.useFlow();
  
  return (
    <div className="App">
      {flow.isInitialized &&
        <div>
          <h1>{flow.state.user?.addr}</h1>
          {!flow.state.user.loggedIn &&
            <button onClick={flow.authenticate}>Log in</button>
          }
          {flow.state.user.loggedIn &&
            <button onClick={flow.unauthenticate}>Log out</button>
          }
        </div>
      }
      {!flow.isInitialized &&
        <p>Initializing...</p>
      }
    </div>
  );
}

function WrappedApp() {
  return (
    <Hyperverse.Provider hyperverse={hyperversePromise}>
      <App />
    </Hyperverse.Provider>
  );
}

export default WrappedApp;
