import {appReducer, appActions, appMiddleware, appSaga ,checkOnlineStatus} from '../lib';
import { put, call, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {combineReducers} from 'redux';
import expect from 'expect'; // You can use any testing library

import {createStore, applyMiddleware, compose} from 'redux';

describe('actions', () => {
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

  it('it should check "isOnline" flow', () => {
    var onlineSaga = checkOnlineStatus();
    expect(onlineSaga.next().value).toEqual(call(delay, 20000));
    expect(onlineSaga.next().value).toEqual(put(appActions.checkIsOnline('timer')));
    expect(onlineSaga.next().value).toEqual(call(delay, 20000));// this check should start over infinitely
  });

});
