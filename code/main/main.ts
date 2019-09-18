///<reference path="Game.ts"/>
///<reference path="./../../libs/jquery.d.ts"/>

module Main{
    // The game
    var game: Game = null;
    
    // Information about loading
    var loadingType: MainLoadingType = MainLoadingType.NONE;
    var loadingString: string = null;
    
    // Information about the game mode
    var gameMode: string = null;

    // Public functions    
    export function documentIsReady(): void{
        Keyboard.execute(); // Execute the Kayboard jquery stuff
        start(); // Start the game
    }
    
    export function reloadEverythingFromFile(fileContent: string): void{
        // Clear intervals for the current game
        game.clearAllIntervals();
        // Set the loading type
        loadingType = MainLoadingType.FILE;
        // Set the loading string
        loadingString = fileContent;
        // Set the gamemode (null so that it is set from loading)
        gameMode = null;
        // We can't register anymore
        Saving.canRegister = false;
        // Finally start (this will erase the current game)
        start();
    }
    
    export function setUrlData(urlData: string): void{
        //TODO: Switch to `URL.searchParams` if possible.
        // If there's something in the url and we can find an equal sign and this equal sign isn't the last character of the string
        if(urlData) {
            // Strip the question mark
            urlData = urlData.substr(1);
            urlData.split("&").forEach(function(s: string): void{
                if(!s) return;
                // Separate the data in two parts : before and after the equal sign
                var i: number = urlData.indexOf("=");
                if(i < 0) return;
                // Do different things depending on the value of beforeEqual
                var key = urlData.substring(0, i);
                var value = urlData.substring(i+1);
                switch(key.toLowerCase()) {
                    // If we're trying to load a local slot
                    case "slot":
                        loadingType = MainLoadingType.LOCAL;
                        loadingString = "slot" + value;
                    break;
                    // If we're trying to launch a new game with a special mode
                    case "gamemode":
                        gameMode = value;
                    break;
                }
            });
        }
    }
    
    function start(): void{
        game = new Game(gameMode);
        Keyboard.setGame(game);
        Saving.load(game, loadingType, loadingString);
        game.postLoad();
    }
}

$(document).ready(function(){
    Main.setUrlData(window.location.search);
    Main.documentIsReady();
});