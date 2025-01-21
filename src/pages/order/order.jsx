import React, { useContext } from "react";
import { Storecontext } from "../../context/storecontext";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Order() {
  const {getTotalCartAmount} =useContext(Storecontext);
  return (
    <div>
    <Header/>
    <form class="h-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-12">
    <div class="place-order-left bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold mb-6">Delivery Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" class="input-field" />
        <input type="text" placeholder="Last Name" class="input-field" />
      </div>
      <input type="email" placeholder="Email Address" class="input-field mt-4" />
      <input type="text" placeholder="Street" class="input-field mt-4" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="City" class="input-field" />
        <input type="text" placeholder="State" class="input-field" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="Zip Code" class="input-field" />
        <input type="text" placeholder="Country" class="input-field" />
      </div>
      <input type="text" placeholder="Phone" class="input-field mt-4" />
    </div>
  
   
    <div class="place-order-right bg-gray-100 p-6 rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold mb-6">Cart Totals</h2>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <p class="text-gray-600">Subtotal</p>
          <p class="font-medium">${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div class="flex justify-between items-center">
          <p class="text-gray-600">Delivery Fee</p>
          <p class="font-medium">$2</p>
        </div>
        <hr />
        <div class="flex justify-between items-center font-semibold">
          <p>Total</p>
          <p>${getTotalCartAmount() + 2}</p>
        </div>
      </div>
      <button
        type="button"
        class="w-full bg-[#fc8019] text-white py-2 mt-4 rounded-lg hover:bg-[#686b78] transition duration-300"
      >
        PROCEED TO PAYMENT
      </button>
    </div>
  </form>
  <Footer/>
  </div>

  );
}
