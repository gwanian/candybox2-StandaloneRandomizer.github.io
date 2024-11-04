///<reference path="CandyMerchantItem.ts"/>

class CandyMerchantItem_Lollipop extends CandyMerchantItem{
    // When we buy, we get one lollipop
    public buy(): void{
        super.buy();
        //commented out as it is handled in the Game class in the randomizer
        //this.getGame().getLollipops().add(1);
    }
}