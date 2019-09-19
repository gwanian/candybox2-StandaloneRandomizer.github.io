///<reference path="Place.ts"/>

class InsideYourBox extends Place{
    // The render area
    private renderArea: RenderArea = new RenderArea();
    
    // The sweets
    private sweets: InsideYourBoxSweet[] = [];
    
    // The interval ID
    private intervalID: number;
    
    // Constructor
    constructor(game: Game){
        super(game);
        
        // Launch the interval
        this.intervalID = setInterval(this.actionInterval.bind(this), 100);
        
        // Resize and update
        this.renderArea.resize(100, 40);
        this.update();
    }
    
    // getRenderArea()
    public getRenderArea(): RenderArea{
        return this.renderArea;
    }
    
    // willStopBeingDisplayed()
    public willStopBeingDisplayed(): void{
        clearInterval(this.intervalID);
    }
    
    // Private methods
    private actionInterval(): void{
        // Update
        this.update();
        this.getGame().updatePlace();
    }
    
    private update(): void{
        // Erase everything
        this.renderArea.resetAllButSize();
        
        // Add a sweet
        this.sweets.push(new InsideYourBoxSweet());
        
        // Update the sweets and delete the one which need to be deleted
        for(var i = 0; i < this.sweets.length; i++){
            if(this.sweets[i].update()){
                this.sweets.splice(i, 1);
                i--;
            }
        }
        
        // Draw the sweets
        for(var i = 0; i < this.sweets.length; i++){
            this.sweets[i].draw(this.renderArea);
        }
        
        // Draw the text
        this.renderArea.drawArray(Database.getAscii("general/insideYourBox/text"), 0, 5, new RenderTransparency(" ", "%"));
        
        // Write the time to completion.
        var completedTime = Saving.loadNumber("gameCompletedTime");
        var formattedTime: string;
        if(completedTime) {
            //TODO: Put this in some util library.
            formattedTime = (function(time: number): string{
                var seconds = time;
                var minutes = Math.floor(seconds/60);
                var hours = Math.floor(minutes/60);
                var s = ("0" + (seconds % 60)).slice(-2);
                var m = ("0" + (minutes % 60)).slice(-2);
                var h = "" + hours;
                return [h,m,s].join(":");
            })(completedTime);
            this.renderArea.drawString("Finish time: " + formattedTime + " (" + completedTime + " s)");
        }
    }
}