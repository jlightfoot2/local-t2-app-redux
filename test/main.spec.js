import {appReducer, appActions, appMiddleware, appSaga ,checkOnlineStatus, appComponents} from '../lib';
import {UpdateDialogContainer} from '../lib/components';
import { put, call, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {combineReducers} from 'redux';
import expect from 'expect'; // You can use any testing library
import React from 'react';
import { mount, shallow } from 'enzyme';
import {createStore, applyMiddleware, compose} from 'redux';
import UpdateDialog from '../lib/components/UpdateDialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
injectTapEventPlugin();
console.log(appComponents);
require('jsdom-global')();

describe('test bundle actions and reducers', () => {
  it('should be able to set cache status to true or false', () => {
    var lastState;

    lastState = appReducer(lastState, appActions.cacheStatusChange(true));
    expect(lastState.cache.isReady).toBe(true);

    lastState = appReducer(lastState, appActions.cacheStatusChange(false));
    expect(lastState.cache.isReady).toBe(false);

  });

  it('should be able to change the connectivity status', () => {
    var lastState;

    lastState = appReducer(lastState, appActions.connectivityChange(1));
    expect(lastState.connectivity.status).toBe(1);

    lastState = appReducer(lastState, appActions.connectivityChange(0));
    expect(lastState.connectivity.status).toBe(0);

  });

  it('should be able be able to store update availability status', () => {
    var lastState;

    lastState = appReducer(lastState, appActions.updatesAvailable(true));
    expect(lastState.updates.available).toBe(true);

    lastState = appReducer(lastState, appActions.updatesAvailable(false));
    expect(lastState.updates.available).toBe(false);

  });

  it('should be able be able to store user notified status', () => {
    var lastState;

    lastState = appReducer(lastState, appActions.updateUserNotified(true));
    expect(lastState.updates.userNotified).toBe(true);

    lastState = appReducer(lastState, appActions.updateUserNotified(false));
    expect(lastState.updates.userNotified).toBe(false);

  });
});

describe('Testing bundle saga generators and such', () => {
  it('it should check "isOnline" saga flow', () => {
    var onlineSaga = checkOnlineStatus();
    expect(onlineSaga.next().value).toEqual(call(delay, 20000));
    expect(onlineSaga.next().value).toEqual(put(appActions.checkIsOnline('timer')));
    expect(onlineSaga.next().value).toEqual(call(delay, 20000));// this check should start over infinitely
  });
});

/**
 * Know issues below make material ui components difficult to test. 
 * Just leaving stub here as a bookmark
 */
// Material-UI Example https://github.com/callemall/material-ui/blob/master/src/Avatar/Avatar.spec.js
// https://github.com/callemall/material-ui/issues/4664
// https://github.com/callemall/material-ui/issues/4021
describe('<UpdateDialog />', () => {
  let _wrapper;

  beforeEach(() => {
    // Technically we don't need to include muiTheme for shallow render
    _wrapper = shallow(<UpdateDialog open={true} onClick={function(){}} message="test test" />, {context: {muiTheme: getMuiTheme(baseTheme) }});
  });
  const muiTheme = getMuiTheme();

 
  it('pending description', () => {

    expect(_wrapper).toBeTruthy();
    expect(_wrapper.is('Dialog')).toEqual(true);

    
  });
});

describe('Testing import short cuts', () => {
  it('modules are the same', () => {
    expect(UpdateDialogContainer).toEqual(appComponents.UpdateDialogContainer);   
  });
});
