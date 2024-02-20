export class Recipe {
    id:number = 0;
    name: string ='';
    description: string ='';
    imagePath: string ='';
  

    constructor(id: number, name: string, desc: string, imagePath: string, ) {
        this.name = name;
        this.description = desc;
        this.imagePath =imagePath; 
        this.id = id;     
    }
}
