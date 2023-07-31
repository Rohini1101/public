export class Product{
    Name = "";
    Price = 0;
    Stock = "false";
    Rating={"Customerrating":{"Rate":6.5, "Count":10111}}


    get customerRating(){
        return  this.Rating.Customerrating.Rate;
    }

    set priceSet(newPrice){
        this.Price = newPrice;
    }
}