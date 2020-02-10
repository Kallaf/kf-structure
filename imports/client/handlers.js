import { Template } from 'meteor/templating';

Template.juniors.helpers({
    topic:function(){
        var topics = [
            {
                "title" : "Strategies",
                "slug" : "strategies",
                "read": Meteor.user()
            },
            {
                "title" : "Just of test",
                "slug" : "just-of-test",
                "read": Meteor.user()
            }
        ]
        return topics;
    }
});

Template.seniors.helpers({
    topic:function(){
        var topics = [
        ]
        return topics;
    }
});
    