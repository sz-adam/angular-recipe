import { Ingredient } from "./ingredient";

export class Recipe {
    id:number = 0;
    name: string ='';
    description: string ='';
    imagePath: string ='';
    ingredients :Ingredient[] = []
  

    constructor(id: number, name: string, desc: string, imagePath: string, ingredients:Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath =imagePath; 
        this.id = Math.floor(Math.random() * 1000)
        this.ingredients = ingredients
    }
}
