import { Router } from 'meteor/iron:router';
/// routing

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render('index');
});

Router.route('/aboutme.html', function () {
    this.render('aboutme');
});

Router.route('/juniors.html', function () {
    this.render('juniors');
});

Router.route('/seniors.html', function () {
    this.render('seniors');
});

Router.route('/resources.html', function () {
    this.render('resources');
});