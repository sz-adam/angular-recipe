import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
     
      'A test recepie',
      'this test dsdsa',
      'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vero tempora maxime eum ullam in consequatur? Praesentium voluptatem repudiandae a eaque dicta, minus ab soluta culpa eum rem voluptatum placeat dolore consectetur laboriosam repellendus ducimus quaerat beatae consequuntur. Consequuntur sed eius cupiditate eligendi, ducimus culpa, eos dolores perspiciatis fugiat hic maiores, laudantium praesentium ratione possimus rerum voluptate nesciunt accusamus quidem temporibus quasi explicabo dignissimos animi odio iusto! Adipisci repellat architecto, quibusdam itaque ipsum, eum aliquam saepe nihil magni odit cumque id quis minima tempora quae! Nulla, tenetur? Sequi mollitia nemo consequatur assumenda. Eligendi aliquid debitis dignissimos nulla rem dolorem molestiae reprehenderit ad ducimus maiores, doloribus incidunt sit et nesciunt nisi recusandae odio consequatur corrupti. Aliquid, inventore? Atque quae maxime optio unde, dolor voluptas similique? Soluta harum facere impedit in doloribus veniam laborum eos rem aut, nobis adipisci repellendus. Perspiciatis eos eveniet numquam reiciendis eaque officiis aut quam similique vel reprehenderit vitae obcaecati saepe sapiente harum provident iusto accusamus ut dignissimos, modi ex atque at libero voluptatum consequuntur. Consectetur nulla distinctio quaerat molestiae, vero illum nesciunt? Consequuntur optio quibusdam libero sed aut laboriosam quae, itaque quam provident officiis esse praesentium est dolorem sequi dolore accusamus tempore, voluptas saepe obcaecati culpa assumenda!',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vero tempora maxime eum ullam in consequatur? Praesentium voluptatem repudiandae a eaque dicta, minus ab soluta culpa eum rem voluptatum placeat dolore consectetur laboriosam repellendus ducimus quaerat beatae consequuntur. Consequuntur sed eius cupiditate eligendi, ducimus culpa, eos dolores perspiciatis fugiat hic maiores, laudantium praesentium ratione possimus rerum voluptate nesciunt accusamus quidem temporibus quasi explicabo dignissimos animi odio iusto! Adipisci repellat architecto, quibusdam itaque ipsum, eum aliquam saepe nihil magni odit cumque id quis minima tempora quae! Nulla, tenetur? Sequi mollitia nemo consequatur assumenda. Eligendi aliquid debitis dignissimos nulla rem dolorem molestiae reprehenderit ad ducimus maiores, doloribus incidunt sit et nesciunt nisi recusandae odio consequatur corrupti. Aliquid, inventore? Atque quae maxime optio unde, dolor voluptas similique? Soluta harum facere impedit in doloribus veniam laborum eos rem aut, nobis adipisci repellendus. Perspiciatis eos eveniet numquam reiciendis eaque officiis aut quam similique vel reprehenderit vitae obcaecati saepe sapiente harum provident iusto accusamus ut dignissimos, modi ex atque at libero voluptatum consequuntur. Consectetur nulla distinctio quaerat molestiae, vero illum nesciunt? Consequuntur optio quibusdam libero sed aut laboriosam quae, itaque quam provident officiis esse praesentium est dolorem sequi dolore accusamus tempore, voluptas saepe obcaecati culpa assumenda!',
      'https://images.pexels.com/photos/15779773/pexels-photo-15779773/free-photo-of-elelmiszer-szines-edes-sutemenyek.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vero tempora maxime eum ullam in consequatur? Praesentium voluptatem repudiandae a eaque dicta, minus ab soluta culpa eum rem voluptatum placeat dolore consectetur laboriosam repellendus ducimus quaerat beatae consequuntur. Consequuntur sed eius cupiditate eligendi, ducimus culpa, eos dolores perspiciatis fugiat hic maiores, laudantium praesentium ratione possimus rerum voluptate nesciunt accusamus quidem temporibus quasi explicabo dignissimos animi odio iusto! Adipisci repellat architecto, quibusdam itaque ipsum, eum aliquam saepe nihil magni odit cumque id quis minima tempora quae! Nulla, tenetur? Sequi mollitia nemo consequatur assumenda. Eligendi aliquid debitis dignissimos nulla rem dolorem molestiae reprehenderit ad ducimus maiores, doloribus incidunt sit et nesciunt nisi recusandae odio consequatur corrupti. Aliquid, inventore? Atque quae maxime optio unde, dolor voluptas similique? Soluta harum facere impedit in doloribus veniam laborum eos rem aut, nobis adipisci repellendus. Perspiciatis eos eveniet numquam reiciendis eaque officiis aut quam similique vel reprehenderit vitae obcaecati saepe sapiente harum provident iusto accusamus ut dignissimos, modi ex atque at libero voluptatum consequuntur. Consectetur nulla distinctio quaerat molestiae, vero illum nesciunt? Consequuntur optio quibusdam libero sed aut laboriosam quae, itaque quam provident officiis esse praesentium est dolorem sequi dolore accusamus tempore, voluptas saepe obcaecati culpa assumenda!',
      'https://images.pexels.com/photos/20241941/pexels-photo-20241941/free-photo-of-fekete-feher-termeszet-epulet-hazi-kedvenc.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
 
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
   addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
