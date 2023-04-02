import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-combined';
  foods: string[]=[];
  removedFood: string | undefined ;
  addFood(foodItem: string){
    this.foods.push(foodItem)
  }
  removeFood(index:number){
    this.removedFood = this.foods[index]
    this.foods.splice(index,1)
    console.log(this.foods);
    

  }
}
