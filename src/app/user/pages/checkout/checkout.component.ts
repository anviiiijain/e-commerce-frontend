import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { numbers } from '@material/dialog';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { CheckoutService } from 'src/app/_services/checkout.service';
import { DataService } from "../../../_services/data.service"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    elements: Elements;
    card: StripeElement;
    paymentStatus: any;
    stripeData: any;
    submitted: any;
    loading: any;
    totalAmount: any;
  
    elementOptions: ElementsOptions = {
      locale: 'en'
    };
  
    stripeForm: FormGroup;
  
    constructor(private fb: FormBuilder, private stripeService: StripeService,private _checkoutService: CheckoutService,private snackbar: MatSnackBar, private router: Router,private dataService: DataService) { }
  
    ngOnInit(): void {
      this.loading = false;
      this.createForm();

      this.totalAmount = this._checkoutService.getTotal()
  
      this.stripeService.elements(this.elementOptions).subscribe((elements) => {
        this.elements = elements;
        if(!this.card){
          this.card = this.elements.create('card', {
            iconStyle: 'solid',
            style: {
              base: {
                iconColor: "#666EE8",
                color: "#31325F",
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: "18px",
                '::placeholder': {
                  color: "#CFD7E0"
                }
              }
            }
          })
          this.card.mount('#card-element')
        }
      })
    }
  
    createForm() {
      this.stripeForm = this.fb.group({
        name: ['', [Validators.required]],
        amount: ['', [Validators.required]],
      })
    }
  
    buy() { 
      this.submitted = true; 
      this.loading = true; 
      this.stripeData = this.stripeForm.value;
      this.stripeService
        .createToken(this.card, {name: "anadi"})
        .subscribe(result => { 
          if (result.token) {
            this.stripeData['token']=result.token;
            this.stripeData['amount']=this.totalAmount*100; 
            this.dataService.stripePayment(this.stripeData).subscribe((res: any) => { 
              console.log(res);
              if(res['success']) { 
                this.loading = false; 
                this.submitted = false; 
                this.paymentStatus = res['status'];
                let snackBarRef = this.snackbar.open("Payment Successful","Go to Home", {
                  duration: 3000
                }) 
                snackBarRef.onAction().subscribe(() => {
                  this.router.navigate(['/']);
                })
              } else { 
                this.loading = false; 
                this.submitted = false; 
                this.paymentStatus = res['status']; 
              }
            })
           } else if (result.error) {
             this.paymentStatus = result.error.message 
            }
          }); 
        }

        displayTotal(){
        
          return this._checkoutService.getTotal()
        }
  }
  