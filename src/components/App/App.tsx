import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

//import components

import { Footer } from '../footer/Footer';

import NavigationContainer from '../navigation/NavigationContainer';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../../redux/app-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Spinner } from '../common/Spinner/Spinner';
import { withSuspense } from '../../hoc/withSuspense';
import { Routing } from '../routing/Routing';

//lazy import



interface AppPropsType extends React.Component {
  initializeApp: () => void;
}
type mapStateToPropsType = {
  initialized: boolean;
};

class App extends React.Component<AppPropsType & mapStateToPropsType, {}> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Spinner />;
    }

    return (
      <div>
        <NavigationContainer />
        <Routing/>     
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
