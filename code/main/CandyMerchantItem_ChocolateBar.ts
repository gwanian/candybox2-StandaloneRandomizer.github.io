///<reference path="CandyMerchantItem.ts"/>

class CandyMerchantItem_ChocolateBar extends CandyMerchantItem{
    // When we buy, we get one chocolate bar
    public buy(): void{
        super.buy();
        //commented out as it is handled in the Game class in the randomizer
        //this.getGame().getChocolateBars().add(1);
        Saving.saveBool("ObtainMerchantChocolateBar", true);
    }
}