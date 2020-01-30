import '@babel/polyfill'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import routes from './app.routes'

import layoutModule from './layout/layout.module'
import homeModule from './home/home.module'
import aboutModule from './about/about.module'

import '../styles/main.scss'

// Config
config.$inject = ['$compileProvider', '$locationProvider']
function config($compileProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $compileProvider.debugInfoEnabled(false)
}

const app = angular.module('app', [
    uiRouter,
    layoutModule,
    homeModule,
    aboutModule
])

app.config(config)
app.config(routes)