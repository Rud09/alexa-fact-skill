/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.9df28f68-7d47-4599-b4b1-497c5d110667';

const SKILL_NAME = 'Batman Fact';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a batman fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'The superhero’s real name Bruce Wayne is actually a combination of Robert the Bruce and Mad Anthony Wayne – a Scottish and American Revolutionary Hero respectively.',
    'Over the years, Batman’s main rivals have been the infamous Joker, the Riddler, the Penguin, Poison Ivy, the Scarecrow, and the lesser known Mr. Freeze and Clayface.',
    'Batman has been around the block – over the years, he has had an array of love interests including Julie Madison, Catwoman, Vicki Vale, and of course Batwoman.',
    'Jason Todd, Tim Drake, Stephanie Brown, and Damian Wayne all played Robin through the years.',
    'Dick Grayson is the real name of Batman’s right hand man, Robin. He didn’t actually hit the Gotham-based comic world until Issue',
    'At the Canadian University of Victoria, you can enroll onto a course designed to explore the life of Batman. The course is called “The Science of Batman.”',
    'Artist Bob Kane and writer Bill Finger are the creators of the original character.',
    'In order of appearance, the actors who have played our beloved Batman are Lewis G Wilson, Robert Lowrey Adam West, Michael Keaton, Val Kilmer, George Clooney, Christian Bale, Will Arnett, and the last, and in some people’s opinions worst, batman is Ben Affleck.',
    'In IGNs 2011 list; Top 100 Comic Book Heroes of All Time, Batman was only pipped to the top spot by co-star Superman.',
    'The fearmongering city of Gotham actually landed its name simply from the writer randomly choosing a jeweller’s named Gotham Jewellers in a telephone directory.',
    'Frank Miller is generally credited with restoring Batman to his old gritty self with “The Dark Knight Returns.” This was a four-issue series published in 1986, where an aged Batman comes out of retirement, joined by a new Robin, to clean up the streets of a Gotham run amok.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
