// ---------------------------------------------------------------------------------------------------------------------
// Configuration for the Tome Wiki.
//
// @module config.js
// ---------------------------------------------------------------------------------------------------------------------

module.exports = {

    // -----------------------------------------------------------------------------------------------------------------
    // General
    // -----------------------------------------------------------------------------------------------------------------

    // The port to run on
    port: 4040,

    // The wiki page you want your base URL to redirect to
    frontPage: '/welcome',

    // The database will be `tome_` plus this string.
    databaseSuffix: 'rfi',

    // The server for ReThinkDB, `undefined` for default
    databaseHost: '209.144.228.139',

    // The port for ReThinkDB, `undefined` for default
    databasePort: undefined,

    // The default message inserted when making a change
    defaultCommit: "minor edit",

    // -----------------------------------------------------------------------------------------------------------------
    // Customization
    // -----------------------------------------------------------------------------------------------------------------

    // Name of your wiki
    name: 'RFI Wiki',

    // URL to the logo for your wiki
    logo: '/images/tome.png',

    // Description for your wiki
    description: 'A wiki for the RFI Universe',

    // Changes the theme to any theme available from http://bootswatch.com/. Example values are:
    // "Default", "Flatly", "Cyborg", "Readable", "Spacelab", "United", etc.
    bootSwatchTheme: "Slate",

    // Template to include at the bottom of the body block; useful for adding in your own css file, etc.
    extraTemplate: "/partials/extra.html",

    // Any text you wish to display in the footer of every page, i.e. copyright, etc.
    footerText: "Copyright 2014 Christopher Case. All rights reserved.",

    // -----------------------------------------------------------------------------------------------------------------
    // Authentication
    // -----------------------------------------------------------------------------------------------------------------

    // The url to use for persona authentication
    audience: "http://rfiuniverse.com",

    // The prefix used for secure cookies.
    sid: 'rfi-u',

    // Replace this with any random string. This is used for your secure cookies.
    secret: '709d819c6543299007f0f9c21ae329b63b38b083',

    // Try to choose questions that don't have easily google-able answers. If you have more than one question, we will
    // randomly rotate them.
    //
    // Takes an array of objects in the format of:
    // {
    //     question: String,
    //     answer: String,
    //     hint: String,    // Optional
    // }
    humanVerificationQuestions: [
        {
            question: "What 'family member' isn't part of RFI?",
            answer: "Fhadiana",
            hint: "First name; not the witch."
        },
        {
            question: "What is another name for pink?",
            answer: "not green",
            hint: "Lowercase."
        },
        {
            question: "Who is the main character of RFI?",
            answer: "Lizbeth",
            hint: "Full first name."
        }
    ],

    // Supports `"auto"` for automatically creating users, `true` to enable registration, or `false` to disable new user
    // creation.
    registration: true

    // -----------------------------------------------------------------------------------------------------------------

};

// ---------------------------------------------------------------------------------------------------------------------
