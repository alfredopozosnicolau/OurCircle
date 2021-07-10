import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessArray from './components/BusinessArray'
import BusinessDetails from './components/BusinessDetails'

// Images
import marvelous_cuts from './images/marvelous_cuts.jpg'
import one_stop_auto from './images/one_stop_auto.png'
import punch_kettlebell_gym from './images/punch_kettlebell_gym.jpg'
import khalils_kitchen from './images/khalils_kitchen.png'
import flex_supplements from './images/flex_supplements.jpg'
import golds_gym from './images/golds_gym.jpg'
import karma_hair_salon from './images/karma_hair_salon.jpg'
import sally_beauty from './images/sally_beauty.jpg'
import clear_vision_auto_detail from './images/clear_vision_auto_detail.png'

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import {
    LandingPage,
    SignUp,
    SignIn,
    UserSettings,
    NavBar
} from './components';

// Pages
import {
    ItemInsert,
    ItemsList,
    ItemsTable,
    ItemUpdate
} from './pages';

class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={LandingPage} />
                <Route exact path={routes.ITEMS} component={ItemsList} />
                <Route exact path={`${routes.ITEMS}/react-table-v6`} component={ItemsTable} />
                <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />
                <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
                <Route exact path={routes.SETTINGS} component={UserSettings} />
                <Route exact path={routes.SIGN_UP} component={SignUp} />
                <Route exact path={routes.BUSINESSES} component={BusinessArray} />
                <Route exact path={routes.BUSINESS} component={BusinessDetails} />
                <Route exact path={routes.SIGN_IN} component={SignIn} />

            </Switch>
        );

        return (
            <Router>
                <NavBar />
                <CssBaseline />
                <div className="app--main">
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
