import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  strikeCheckout: any = null;

  constructor() { }

  ngOnInit() {
    this.stripePaymentGateway();
  }

  checkout(amount: number) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7jhsFnqDkYLAYJdj5aMcS9QfZebNfuxkm8uatrjs58VF6V3fWbCGwGJ8YYOuBC3wpIF0CmCaT2GueuCAvTPZDJ00TKtb4nJT',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log("broo", stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7jhsFnqDkYLAYJdj5aMcS9QfZebNfuxkm8uatrjs58VF6V3fWbCGwGJ8YYOuBC3wpIF0CmCaT2GueuCAvTPZDJ00TKtb4nJT',
          locale: 'auto',
          token: function (token: any) {
            console.log("yooo", token)
            alert('Payment via stripe successfull!');
          }
        });
      }

      window.document.body.appendChild(scr);
    }
  }
}
