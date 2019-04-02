import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';
import Volunteer from './components/Volunteer';
import ReportIncident from './components/ReportIncident';
import Responder from './components/Responder';
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true} />
                    <Scene key="signup" component={Register} title="Register" />
                    <Scene key="userMap" component={ReportIncident} title="maps" />
                    <Scene key="Volunteer" component={Volunteer} title="Volunteer" />
                    <Scene key="Responder" component={Responder} title="Responder" />
                </Stack>
            </Router>
        )
    }
}