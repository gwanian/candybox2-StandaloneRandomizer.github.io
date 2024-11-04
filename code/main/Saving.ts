module Saving{
    // Saving maps
    var bools: { [s: string]: boolean; } = {};
    var numbers: { [s: string]: number; } = {};
    var strings: { [s: string]: string; } = {};
    var game : Game;


    /* List of items for the randomizer:

    Example Item
    Example Description
    Example Name

    Chocolate Bar
    A chocolate bar (specifically, the one recived from throwing candies)
    candiesThrowGotChocolateBar
    
    Castle Tower Unlock
    Item that allows access to the castle tower after killing the NougatMonster
    castleKilledNougatMonster



    */

    //For randomizer, list of locations and their corresponding items
    var boolItemLocations: {[s: string]: string} =
    {
         
        /*
        ---------------------------
        MAP/QUEST COMPLETION CHECKS
        ---------------------------
        */
        "castleKilledNougatMonster" : "castleKilledNougatMonster",

        "mainMapDoneDesert" : "mainMapDoneDesert",

        "mainMapDoneBridge" : "mainMapDoneBridge",

        "mainMapDoneCaveEntrance" : "mainMapDoneCaveEntrance",

        "mainMapDonePier" : "mainMapDonePier", //the lighthouse is always accessible from the pier; all this bool normally does is allow you to go to the lighthouse directly from the map

        "mainMapDoneForest" : "mainMapDoneForest",

        "mainMapDoneCastleEntrance" : "mainMapDoneCastleEntrance",

        "TheCavePattern_TreasureMapSawMap" : "TheCavePattern_TreasureMapSawMap",

        "dragonUnlockedCyclops" : "dragonUnlockedCyclops",

        /*
        ----------------
        GRID ITEM CHECKS
        ----------------
        */
        "gridItemPossessedA" : "gridItemPossessedA",

        "gridItemPossessedAdvancedGrimoire" : "gridItemPossessedAdvancedGrimoire",

        "gridItemPossessedBeginnersGrimoire" : "gridItemPossessedBeginnersGrimoire",

        "gridItemPossessedBlackMagicGrimoire" : "gridItemPossessedBlackMagicGrimoire",

        "gridItemPossessedFeather" : "gridItemPossessedFeather",

        "gridItemPossessedFortressKey" : "gridItemPossessedFortressKey",

        "gridItemPossessedGreenSharkFin" : "gridItemPossessedGreenSharkFin",

        "gridItemPossessedHeartPendant" : "gridItemPossessedHeartPendant",

        "gridItemPossessedHeartPlug" : "gridItemPossessedHeartPlug",

        "gridItemPossessedL" : "gridItemPossessedL",

        "gridItemPossessedMainMap" : "gridItemPossessedMainMap",

        "gridItemPossessedP" : "gridItemPossessedP",

        "gridItemPossessedPitchfork" : "gridItemPossessedPitchfork",

        "gridItemPossessedPogoStick" : "gridItemPossessedPogoStick",

        "gridItemPossessedPurpleSharkFin" : "gridItemPossessedPurpleSharkFin",

        "gridItemPossessedRedSharkFin" : "gridItemPossessedRedSharkFin",
        
        "gridItemPossessedShellPowder" : "gridItemPossessedShellPowder",

        "gridItemPossessedSponge" : "gridItemPossessedSponge",

        "gridItemPossessedTalkingCandy" : "gridItemPossessedTalkingCandy",

        "gridItemPossessedThirdHouseKey" : "gridItemPossessedThirdHouseKey",

        "gridItemPossessedTimeRing" : "gridItemPossessedTimeRing",

        "gridItemPossessedUnicornHorn" : "gridItemPossessedUnicornHorn",

        "gridItemPossessedXinopherydonClaw" : "gridItemPossessedXinopherydonClaw",

        "gridItemPossessedY" : "gridItemPossessedY",    

        /*
        ---------------------
        EQUIPABLE ITEM CHECKS
        ---------------------
        */
        "eqItemBodyArmoursEnchantedKnightBodyArmour" : "eqItemBodyArmoursEnchantedKnightBodyArmour",

        "eqItemBodyArmoursKnightBodyArmour" : "eqItemBodyArmoursKnightBodyArmour",

        "eqItemBodyArmoursLightweightBodyArmour" : "eqItemBodyArmoursLightweightBodyArmour",

        "eqItemBootsBootsOfIntrospection" : "eqItemBootsBootsOfIntrospection",

        "eqItemBootsLeatherBoots" : "eqItemBootsLeatherBoots",

        "eqItemBootsRocketBoots" : "eqItemBootsRocketBoots",

        "eqItemGlovesLeatherGloves" : "eqItemGlovesLeatherGloves",

        "eqItemGlovesPinkEnchantedGloves" : "eqItemGlovesPinkEnchantedGloves",

        "eqItemGlovesRedEnchantedGloves" : "eqItemGlovesRedEnchantedGloves",

        "eqItemHatMerchantHat" : "eqItemHatMerchantHat",

        "eqItemHatOctopusKingCrown" : "eqItemHatOctopusKingCrown",

        "eqItemHatOctopusKingCrownWithJaspers" : "eqItemHatOctopusKingCrownWithJaspers",

        "eqItemHatOctopusKingCrownWithObsidian" : "eqItemHatOctopusKingCrownWithObsidian",

        "eqItemHatSorceressHat" : "eqItemHatSorceressHat",

        "eqItemWeaponEnchantedMonkeyWizardStaff" : "eqItemWeaponEnchantedMonkeyWizardStaff",

        "eqItemWeaponGiantSpoon" : "eqItemWeaponGiantSpoon",

        "eqItemWeaponGiantSpoonOfDoom" : "eqItemWeaponGiantSpoonOfDoom",

        "eqItemWeaponIronAxe" : "eqItemWeaponIronAxe",

        "eqItemWeaponMonkeyWizardStaff" : "eqItemWeaponMonkeyWizardStaff",

        "eqItemWeaponPolishedSilverSword" : "eqItemWeaponPolishedSilverSword",

        "eqItemWeaponScythe" : "eqItemWeaponScythe",

        "eqItemWeaponSummoningTribalSpear" : "eqItemWeaponSummoningTribalSpear",

        "eqItemWeaponTribalSpear" : "eqItemWeaponTribalSpear",

        "eqItemWeaponTrollBludgeon" : "eqItemWeaponTrollBludgeon",

        "eqItemWeaponWoodenSword" : "eqItemWeaponWoodenSword",

        /*
        -----------------
        STATUS BAR CHECKS
        -----------------
        */
        "statusBarUnlockedCauldron" : "statusBarUnlockedCauldron",

        "statusBarUnlockedCfg" : "statusBarUnlockedCfg",

        "statusBarUnlockedHealthBar" : "statusBarUnlockedHealthBar", //whether or not the health bar is displayed (you still have health you just can't see it)

        "statusBarUnlockedInsideYourBox" : "statusBarUnlockedInsideYourBox",

        "statusBarUnlockedInventory" : "statusBarUnlockedInventory", //whether or not the inventory displays; this location is checked when buying the wooden sword.

        "statusBarUnlockedLollipopFarm" : "statusBarUnlockedLollipopFarm", //only contols if the lollipop farm appears on the status bar.  You can still access it from the map (and exit by selecting another button on the status bar)

        "statusBarUnlockedMap" : "statusBarUnlockedMap",

        "statusBarUnlockedSave" : "statusBarUnlockedSave",

        "statusBarUnlockedTheArena" : "statusBarUnlockedTheArena",

        "statusBarUnlockedTheComputer" : "statusBarUnlockedTheComputer",

        /*
        ---------------
        SUPERRPG CHECKS
        ---------------
        */
        "SuperRPGReward1" : "SuperRPGReward1", //requires clearing floor 5
    
        "SuperRPGReward2" : "SuperRPGReward2", //requires clearing floor 10

        "SuperRPGReward3" : "SuperRPGReward3", //requires clearing floor 13

        //both of these checks are unlocked if a completed run clears floor 20
        "SuperRPGReward4" : "SuperRPGReward4",
        "SuperRPGUnlockedHardmode" : "SuperRPGUnlockedHardmode",

        /*
        ---------------
        RESOURCE CHEKCS
        ---------------
        */
        "Obtain4thHouseLollipopInCupboard" : "Obtain4thHouseLollipopInCupboard",

        "Obtain4thHouseLollipopOnCupboard" : "Obtain4thHouseLollipopOnCupboard",

        "Obtain4thHouseLollipopUnderRug" : "Obtain4thHouseLollipopUnderRug", 

        "ObtainCandiesThrownChocolateBar" : "ObtainCandiesThrownChocolateBar",

        "ObtainCaveChocolateBar" : "ObtainCaveChocolateBar",

        "ObtainForgeLollipop" : "ObtainForgeLollipop",
        
        "ObtainHole4thChestChocolateBars" : "ObtainHole4thChestChocolateBars",

        "ObtainMerchantChocolateBar" : "ObtainMerchantChocolateBar",

        "ObtainMerchantLollipop1" : "ObtainMerchantLollipop1",

        "ObtainMerchantLollipop2" : "ObtainMerchantLollipop2",

        "ObtainMerchantLollipop3" : "ObtainMerchantLollipop3",

        "ObtainSorceressHutLollipop" : "ObtainSorceressHutLollipop",

        "ObtainTreasureChocolateBars" : "ObtainTreasureChocolateBars", //this is the check for obtaining the chocolate bars in the dig spot above the village, unlocked normally by findind the treasure map made of stones in the cave

        "ObtainTreeReward1Candies" : "ObtainTreeReward1Candies",

        "ObtainTreeReward2Candies" : "ObtainTreeReward2Candies",

        "ObtainTreeReward3Candies" : "ObtainTreeReward3Candies",

        "ObtainTreeReward4Lollipops" : "ObtainTreeReward4Lollipops",

        "ObtainTreeReward5ChocolateBars" : "ObtainTreeReward5ChocolateBars"


    };
    
    // Can we register?
    export var canRegister: boolean = true;
    
    // Special public functions : used to load or the actual save
    export function load(game: Game, loadingType: MainLoadingType, loadingString: string): void{
        // Depending on the loading type, do different things
        switch(loadingType){
            // We don't load anything
            case MainLoadingType.NONE:
                // You can uncomment the lines below to start your game with everything unlocked (useful for testing purposes)
                
                // Saving.saveNumber("aTreeStep", 2);
                
                // Saving.saveBool("mainMapDoneDesert", true);
                // Saving.saveBool("mainMapDoneBridge", true);
                // Saving.saveBool("mainMapDoneCaveEntrance", true);
                // Saving.saveBool("mainMapDonePier", true);
                //Saving.saveBool("mainMapDoneForest", true);
                // Saving.saveBool("mainMapDoneCastleEntrance", true);
                
                // Saving.saveBool("gridItemPossessedMainMap", true);
                //Saving.saveBool("gridItemPossessedTimeRing", true);
                 Saving.saveBool("gridItemPossessedThirdHouseKey", true);
                //Saving.saveBool("gridItemPossessedBeginnersGrimoire", true);
                
                //Saving.saveBool("gridItemPossessedFeather", true);
                //Saving.saveBool("gridItemPossessedPogoStick", true);
                //Saving.saveBool("gridItemPossessedHeartPlug", true);
                //Saving.saveBool("gridItemPossessedAdvancedGrimoire", true);
                
                //Saving.saveBool("gridItemPossessedSponge", true);
                //Saving.saveBool("gridItemPossessedShellPowder", true);
                //Saving.saveBool("gridItemPossessedHeartPendant", true);
                //Saving.saveBool("gridItemPossessedBlackMagicGrimoire", true);
                
                //Saving.saveBool("gridItemPossessedFortressKey", true);
                //Saving.saveBool("gridItemPossessedUnicornHorn", true);
                //Saving.saveBool("gridItemPossessedXinopherydonClaw", true);
                //Saving.saveBool("gridItemPossessedPitchfork", true);
                
                //Saving.saveBool("gridItemPossessedRedSharkFin", true);
                //Saving.saveBool("gridItemPossessedGreenSharkFin", true);
                //Saving.saveBool("gridItemPossessedPurpleSharkFin", true);
                
                //Saving.saveBool("gridItemPossessedTalkingCandy", true);
                
                //Saving.saveBool("gridItemPossessedP", true);
                //Saving.saveBool("gridItemPossessedL", true);
                //Saving.saveBool("gridItemPossessedA", true);
                //Saving.saveBool("gridItemPossessedY", true);
                
                // Saving.saveBool("eqItemGlovesRedEnchantedGloves", true);
                // Saving.saveBool("eqItemGlovesPinkEnchantedGloves", true);
                //Saving.saveBool("eqItemWeaponWoodenSword", true);
                // Saving.saveBool("eqItemWeaponTrollBludgeon", true);
                // Saving.saveBool("eqItemWeaponTribalSpear", true);
                // Saving.saveBool("eqItemWeaponSummoningTribalSpear", true);
                // Saving.saveBool("eqItemWeaponMonkeyWizardStaff", true);
                // Saving.saveBool("eqItemWeaponGiantSpoon", true);
                // Saving.saveBool("eqItemHatOctopusKingCrown", true);
                
                // Saving.saveBool("eqItemBootsBootsOfIntrospection", true);
                
                // Saving.saveBool("eqItemBootsRocketBoots", true);
                
                // Saving.saveBool("eqItemWeaponGiantSpoonOfDoom", true);
                
                // Saving.saveBool("eqItemBodyArmoursEnchantedKnightBodyArmour", true);
                
                // Saving.saveNumber("gameCandiesEatenCurrent", 500000000);
                // Saving.saveNumber("gameCandiesEatenMax", 500000000);
                
                // Saving.saveNumber("playerHp", 1000);
                
                // Saving.saveBool("questPlayerSpellHealthPotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellTurtlePotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellAntiGravityPotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellBerserkPotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellCloningPotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellPPotionHasSpell", true);
                // Saving.saveBool("questPlayerSpellXPotionHasSpell", true);
                
                // Saving.saveNumber("questPlayerSpellHealthPotionQuantity", 0);
                // Saving.saveNumber("questPlayerSpellTurtlePotionQuantity", 64084);
                // Saving.saveNumber("questPlayerSpellAntiGravityPotionQuantity", 47542);
                // Saving.saveNumber("questPlayerSpellBerserkPotionQuantity", 99549);
                // Saving.saveNumber("questPlayerSpellCloningPotionQuantity", 10050);
                // Saving.saveNumber("questPlayerSpellPPotionQuantity", 10085250);
                // Saving.saveNumber("questPlayerSpellXPotionQuantity", 10050999);
                
                //Saving.saveBool("gameDebug", true);
                
                 Saving.saveNumber("gameCandiesCurrent", 5000000);
                 Saving.saveNumber("gameCandiesMax", 5000000);
                
                 Saving.saveNumber("gameLollipopsCurrent", 5000000000);
                 Saving.saveNumber("gameLollipopsMax", 500000000000);
                
                 Saving.saveNumber("gameChocolateBarsCurrent", 7);
                 Saving.saveNumber("gameChocolateBarsMax", 7);
                
                 Saving.saveNumber("gamePainsAuChocolatCurrent", 7);
                 Saving.saveNumber("gamePainsAuChocolatMax", 7);
                
                // Saving.saveBool("lonelyHouseTakeTheBoxDone", true);
                
                // Saving.saveNumber("lollipopFarmPondHowManyLolligators", 0);
                
                // Saving.saveBool("statusBarUnlocked", true);
                // Saving.saveBool("statusBarUnlockedCfg", true);
                // Saving.saveBool("statusBarUnlockedSave", true);
                // Saving.saveBool("statusBarUnlockedMap", true);
                // Saving.saveBool("statusBarUnlockedInventory", true);
                // Saving.saveBool("statusBarUnlockedLollipopFarm", true);
                // Saving.saveBool("statusBarUnlockedCauldron", true);
                // Saving.saveBool("statusBarUnlockedHealthBar", true);
                // Saving.saveBool("statusBarUnlockedInsideYourBox", true);
                // Saving.saveBool("statusBarUnlockedTheComputer", true);
                // Saving.saveBool("statusBarUnlockedTheArena", true);
                
                // Saving.saveBool("castleKilledNougatMonster", true);
                
                // Saving.saveBool("dragonDone", true);
                //Saving.saveBool("dragonUnlockedCyclops", true);
                
                // Saving.saveBool("castleTowerFirstVisitDone", true);
                
                //Saving.saveString("gameLanguage", "fr");
                
            break;
            case MainLoadingType.LOCAL:
                LocalSaving.load(loadingString);
            break;
            case MainLoadingType.FILE:
                var fileBools: string[] = loadingString.match(/bool +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);
                var fileNumbers: string[] = loadingString.match(/number +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);
                var fileStrings: string[] = loadingString.match(/string +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);
                
                // Load the bools
                if(fileBools != null){
                    for(var i = 0; i < fileBools.length; i++){
                        Saving.saveBool(fileBools[i].match(/[a-zA-Z0-9_]+=/)[0].replace("=", ""),
                                        Saving.stringToBool(fileBools[i].match(/=[a-zA-Z0-9_]+/)[0].replace("=", "")));
                    }
                }
                
                // Load the numbers
                if(fileNumbers != null){
                    for(var i = 0; i < fileNumbers.length; i++){
                        Saving.saveNumber(fileNumbers[i].match(/[a-zA-Z0-9_]+=/)[0].replace("=", ""),
                                        Saving.stringToNumber(fileNumbers[i].match(/=[a-zA-Z0-9_]+/)[0].replace("=", "")));
                    }
                }
                
                // Load the strings
                if(fileStrings != null){
                    for(var i = 0; i < fileStrings.length; i++){
                        Saving.saveString(fileStrings[i].match(/[a-zA-Z0-9_]+=/)[0].replace("=", ""),
                                        fileStrings[i].match(/=[a-zA-Z0-9_]+/)[0].replace("=", ""));
                    }
                }
            break;
        }
        
        // Apply the loaded variables to various things by calling the load() methods of various objects
        game.load(); // Various variables owned by the game object
        game.getPlayer().load(); // The player
    }
    
    export function save(game: Game, savingType: MainLoadingType, savingString: string): boolean{
        // Save some special variables by calling the save() methods of various objects
        game.save(); // Various variables owned by the game object
        game.getPlayer().save(); // The player
        
        // Do different things depending on the saving type
        switch(savingType){
            case MainLoadingType.LOCAL:
                return LocalSaving.save(savingString);
            break;
            case MainLoadingType.FILE:
                return false;
            break;
        }
    }
    
    // Public conversion functions (useful because we sometimes only want to store strings, either locally or online, but in fact we also work with numbers and bools)
    export function boolToString(b: boolean): string{
        if(b)
            return "true";
        return "false";
    }
    
    export function numberToString(n: number): string{
        return n.toString();
    }
    
    export function stringToBool(s: string): boolean{
        if(s == "true")
            return true;
        else if(s == "false")
            return false;
        console.log("Error : trying to convert a string to a bool but the string value is " + s + ".");
    }
    
    export function stringToNumber(s: string): number{
        return parseFloat(s); // We need to use parseFloat to avoid problems with scientific notations
    }
    
    // Public functions
    export function getAllBools(): { [s: string]: boolean; }{
        return bools;
    }
    
    export function getAllNumbers(): { [s: string]: number; }{
        return numbers;
    }
    
    export function getAllStrings(): { [s: string]: string; }{
        return strings;
    }
    
    export function loadBool(key: string): boolean{
        // BUGS
        if(Bugs.getUltimateBugLevel() >= 2)
            saveBool(key, Random.flipACoin());
        
        if(key in bools)
            return bools[key];
        console.log("Error : trying to load the unknown bool " + key + ".");
    }
    
    export function loadNumber(key: string): number{
        // BUGS
        if(Bugs.getUltimateBugLevel() >= 3 && Random.oneChanceOutOf(2))
            saveNumber(key, Random.between(0, 10000) - 5000);
        
        if(key in numbers)
            return numbers[key];
        console.log("Error : trying to load the unknown number " + key + ".");
    }
    
    export function loadString(key: string): string{
        // BUGS
        if(Bugs.getUltimateBugLevel() >= 4 && Random.oneChanceOutOf(5))
            saveString(key, "bug");
        
        if(key in strings)
            return strings[key];
        console.log("Error : trying to load the unknown string " + key + ".");
    }
    
    export function registerBool(key: string, b: boolean): void{
        if(canRegister){
            if(key in bools || key in numbers || key in strings)
                console.log("Error : trying to register the key " + key + " as bool, but this key is already registered.");
            this.saveBool(key, b, true);
        }
    }
    
    export function registerNumber(key: string, n: number): void{
        if(canRegister){
            if(key in numbers || key in bools || key in strings)
                console.log("Error : trying to register the key " + key + " as number, but this key is already registered.");
            this.saveNumber(key, n, true);
        }
    }
    
    export function registerString(key: string, s: string): void{
        if(canRegister){
            if(key in strings || key in bools || key in numbers)
                console.log("Error : trying to register the key " + key + " as string, but this key is already registered.");
            this.saveString(key, s, true);
        }
    }
    
    /* Randomizer modification: added the saveOriginal parameter to allow skipping the swapping of the location
        bool to the item bool*/
    export function saveBool(key: string, b: boolean, registering: boolean = false, saveOriginal: boolean = false): void{
        
        var temp : string = key;
        var boolArray : boolean[] = [loadBool(key), b];

        /*Checks if the bool name passed is a location in the randomizer.  If so, replaces the key parameter with
            the item in that location (only for obtaining the item, not losing it)*/
        if(key in boolItemLocations && b && !saveOriginal){
            key = boolItemLocations[key];
        }
        
        console.log(key);
        if(key in bools || registering){
            bools[key] = b;
            return;
        }
        console.log("Error : trying to save the unknown bool " + key + ".");
    }
    
    export function saveNumber(key: string, n: number, registering: boolean = false): void{
        if(key in numbers || registering){
            numbers[key] = n;
            return;
        }
        console.log("Error : trying to save the unknown number " + key + ".");
    }
    
    export function saveString(key: string, s: string, registering: boolean = false): void{
        if(key in strings || registering){
            strings[key] = s;
            return;
        }
        console.log("Error : trying to save the unknown string " + key + ".");
    }

    // Randomizer functionality; allows for the passing of a location bool to find the item bool (ie what item is in the location)
    export function getItemFromLocation(key : string):string{
        if(key in boolItemLocations){
           return boolItemLocations[key];
        }
        console.log("Location " + key + " does not exist in the randomizer.  " + key + "will be returned");
        return key;
    }
}
