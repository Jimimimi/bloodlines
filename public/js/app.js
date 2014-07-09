/**
* bloodlines Module
*
* Description
*/
'use strict';

var app = angular.module('bloodlines', ['ngRoute','bloodlines-directives'

  ]).
  config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/families', {
        templateUrl: 'partials/families',
        controller: FamiliesCtrl
      }).
      when('/families/add', {
        templateUrl: 'partials/family-add',
        controller: FamilyAddCtrl
      }).
      when('/families/:id', {
        templateUrl: 'partials/family',
        controller: FamilyCtrl
      }).
      when('/families/:id/edit', {
        templateUrl: 'partials/family-edit',
        controller: FamilyEditCtrl
      }).
      when('/families/:id/delete', {
        templateUrl: 'partials/family-delete',
        controller: FamilyDeleteCtrl
      }).
      when('/characters', {
        templateUrl: 'partials/characters',
        controller: CharactersCtrl
      }).
      when('/characters/add', {
        templateUrl: 'partials/character-add',
        controller: CharacterAddCtrl
      }).
      when('/characters/:id', {
        templateUrl: 'partials/character',
        controller: CharacterCtrl
      }).
      when('/characters/:id/edit', {
        templateUrl: 'partials/character-edit',
        controller: CharacterEditCtrl
      }).
      when('/characters/:id/delete', {
        templateUrl: 'partials/character-delete',
        controller: CharacterDeleteCtrl
      }).
      when('/404', {
        templateUrl: 'partials/404'
      }).
      otherwise({
        redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  }]);