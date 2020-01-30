import angular from 'angular'

import routes from './home.routes'

import homeComponent from './home.component'

const home = angular.module('home', [])

home.component('home', homeComponent)
home.config(routes)

export default home.name