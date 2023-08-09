import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public cost: any;
  ammount(){
    this.cost = Number(prompt("Enter your credit ammount *In digits"));
  }

  constructor() { }
  handler:any = null;
  ngOnInit() {
    this.ammount();

    this.loadStripe();
  }



  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KRbUSGeBpr3TBbtvABzs29VS3KNyFXQEW69OnL9ad3uJyXAFiGio8MN1Kay6B4UscADRgKrem9WBOOOaL4aYWAs006LdMngxY',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Payment Successfuly Sent To The Mechanic!!');
      }
    });

    handler.open({
      name: 'Stripe Payment Page',
      description: 'Garage Uber',
      amount: amount * 100
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KRbUSGeBpr3TBbtvABzs29VS3KNyFXQEW69OnL9ad3uJyXAFiGio8MN1Kay6B4UscADRgKrem9WBOOOaL4aYWAs006LdMngxY',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
  title = 'Stripe Tutorial';

  onClick() {
    myTest();
  }
}
