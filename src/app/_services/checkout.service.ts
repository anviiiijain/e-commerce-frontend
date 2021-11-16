import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  totalAmount = 0 ;
  constructor() { }

  setTotal(total: any){
    this.totalAmount = total;
    
  }

  getTotal(){
    
    return this.totalAmount;
  }


 
}
