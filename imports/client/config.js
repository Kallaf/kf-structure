import { Accounts } from "meteor/accounts-base";

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});
    
Blog.config({
    blogShowTemplate: 'myShowBlogTemplate',
    syntaxHighlighting: true, // default is false
    syntaxHighlightingTheme: 'atelier-dune.dark', // default is 'github'
    comments: {
        useSideComments: true, // default is false
        allowAnonymous: true   // default is false
      }
});