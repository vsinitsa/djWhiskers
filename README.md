# djWhiskers
Modular discord music bot

This is my take on a discord music bot, except mine is developed to be modular so you can create your own modules and the bot will integrate them into itself on restart.

## Setup:
You need the current and NOT lts version of node.js for this bot to work. 
This is because we use async/await which is only available in the current version.
You can download node.js here: https://nodejs.org/en/
### Windows and Linux:
First clone or download and extract the library to any folder:
```
git clone https://github.com/vsinitsa/djWhiskers
```
Then open a terminal in the folder that has the bot and run:
```
pip install
```
This will install all the necessery modules to run the bot  
Now all you have to do is open the sampleconfig.json file and add your discord and youtube tokens you can also change the server prefix if you would like.  
The server owner field is your discord id witch you can get by right clicking your name when discord is in developer mode, which you can turn on in the discord settings. ***This is currently not required along with a twitch token***

After you have added in your discord and youtube tokens simply run:
```
node .
```
