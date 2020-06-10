// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');


class EmptyBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            const msgRcvd = context.activity.text;
            const msg=context.activity.text;
            if(msgRcvd=="tiers")
            {    
                 const msg=intent(msgRcvd,context);
                 await context.sendActivity(msg);
            }    
            else if(msgRcvd=="application")
            {
                 const msg=intent1(msgRcvd);
                 await context.sendActivity(msg);
            }
            else if(msg=='hi')
            {
                await context.sendActivity("I don't get it");
            }
               
                
            
            // By calling next() you ensure that the next BotHandler is run.
           // await next();
        });

     /*   this.onMessage(async (context, next) => {
            const msgRcvd = context.activity.text;
               await context.sendActivity(msgRcvd);
                
            
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });*/

      /*  this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity('Hello');
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });*/
    }

    
}
function intent(params,context) 
    {
        context.sendActivity('test');
        return 'roopam';
        
    }
function intent1(params)
{
    return 'reshab';
}

module.exports.EmptyBot = EmptyBot;
