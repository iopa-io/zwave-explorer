import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import Home from '~/components/Home';
import Document from '~/components/Document';
import { Device } from '~/components/Device';
import { Devices } from '~/components/Devices';
import Gallery from '~/components/Gallery';
import Book from '~/components/Book';
import UserProfile from '~/components/UserProfile';

const views = {
  home: new Route({
    path: '/',
    component: <Home />
  }),
  userProfile: new Route({
    path: '/profile/:username/:tab',
    component: <UserProfile />,
    onEnter: () => {
      console.log('entering user profile!');
    },
    beforeExit: () => {
      console.log('exiting user profile!');
    },
    onParamsChange: (route, params) => {
      console.log('params changed to', params);
    }
  }),
  gallery: new Route({
    path: '/gallery',
    component: <Gallery />,
    beforeExit: () => {
      const result = confirm('Are you sure you want to leave the gallery?');
      return result;
    },
    onEnter: (route, params, store, queryParams) => {
      console.log('queryParams', queryParams);
    }
  }),
  device: new Route({
    path: '/device/:id',
    component: <Device />,
    onEnter: (route, params, store, queryParams) => {
      store.app.properties.breadcrumbs = [
        { text: 'Home', 'key': 'Home', onClick: () =>  { store.router.goTo(views.home, null, store) } },
        { text: 'Devices', 'key': 'Devices',onClick: () =>  { store.router.goTo(views.devices, null, store) } },
        { text: params.id, 'key': params.id, isCurrentItem: true },
      ];
    },
    onExit: (route, params, store, queryParams) => {
      store.app.properties.breadcrumbs = [];
    }
  }),
  devices: new Route({
    path: '/devices',
    component: <Devices />,
    beforeEnter: (route, params, store) => {
      if (!store.auth.isLoggedin) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    }
  }),
  document: new Route({
    path: '/document/:id',
    component: <Document />,
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = store.auth.isLoggedin;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    },
    onEnter: (route, params) => {
      console.log(`entering document with params`, params);
    }
  }),
  book: new Route({
    path: '/book/:id/page/:page',
    component: <Book />,
    onEnter: (route, params, store) => {
      console.log(`entering book with params`, params);
    }
  })
};
export default views;