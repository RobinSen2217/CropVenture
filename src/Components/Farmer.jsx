import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Farmer(props) {
    document.title=`Cropventure - ${props.title}`
    const [disable,setDisable]=useState(false)
    const indianStates = [ 
      "New Delhi",
      "Punjab",
      "Uttar Pradesh",
    "Bihar",
    "Chandigarh",
    "Haryana",
    "Gujarat",
    "Chhattisgarh",
    "Himachal Pradesh",
    "Karnataka",
    "Assam",
    "Kerala",
    "Rajasthan",
    "Maharashtra",
    "West Bengal",
    "Goa",
    "Jammu and Kashmir",
    "Jharkhand",
    "Arunachal Pradesh",
    "Madhya Pradesh",
    "Andhra Pradesh",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Uttarakhand",
                "Dadra and Nagar Haveli",
                "Tripura",
                "Daman and Diu",
                "Lakshadweep",
                "Andaman and Nicobar Islands",
                "Puducherry"
              ]
  return (
    <div className='mt-7'>
      <h1 className='text-3xl font-bold pl-4 leading-31'>Register with CropVenture as an Associate Farmer</h1>
      <div className='grid grid-cols-2 justify-between mx-8 my-7 gap-x-5'> 

<form className='w-4/5'>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className=" font-semibold leading-7 text-gray-900 text-lg">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
          <div className="mt-2">
            <input id="phone" name="phone" type="tel" autoComplete="mobile" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">State</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border focus:outline-none focus:border-green-400 sm:max-w-xs sm:text-sm sm:leading-6">
              {indianStates.map((state)=>{
                return(<option key={state}>{state}</option>)
              })}
            </select>
          </div>
        </div>


        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6 px-2"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">District</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset px-2 ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 px-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="aadhar" className="block text-sm font-medium leading-6 text-gray-900">Aadhar Card Number</label>
          <div className="mt-2">
            <input id="aadhar" name="aadhar" type="text" autoComplete="number" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="farmid" className="block text-sm font-medium leading-6 text-gray-900">Farmer ID (as given by the Government of India)</label>
          <div className="mt-2">
            <input id="farmid" name="farmid" type="text" autoComplete="id" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="pan" className="block text-sm font-medium leading-6 text-gray-900">PAN Number</label>
          <div className="mt-2">
            <input id="pan" name="pan" type="text" autoComplete="number" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="land" className="block text-sm font-medium leading-6 text-gray-900">Land Area Owned (in hectares)</label>
          <div className="mt-2">
            <input id="land" name="land" type="tel" autoComplete="land" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        </div>
        </div>

    <div className=" pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Bank details</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Please enter your bank details.</p>
      <div className="mt-10 space-y-10">
        
      <div className="sm:col-span-4">
          <label htmlFor="creditno" className="block text-sm font-medium leading-6 text-gray-900">Cedit Card Number</label>
          <div className="mt-2">
            <input id="creditno" inputMode="numeric" pattern="[0-9\s]{13,19}" name="creditno" type="tel" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-500 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div className="sm:col-span-2">
          <label htmlFor="cardname" className="block text-sm font-medium leading-6 text-gray-900">Card Holder's Name</label>
          <div className="mt-2">
            <input type="text" name="cardname" id="cardname" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset px-2 ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="ifsc" className="block text-sm font-medium leading-6 text-gray-900">IFSC Code</label>
          <div className="mt-2">
            <input id="ifsc" name="ifsc" type="text" autoComplete="ifsc" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border focus:outline-none focus:border-green-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <Link to='/Submitted' className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</Link>
  </div>
</form>





        <div>
        <section className="py-10 bg-white sm:py-16 lg:py-24 w-4/5">
    <div className="max-w-6xl mx-auto sm:px-6 ">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <h2 className="text-xl font-semibold text-black">Why become an associated farmer with CropVenture?</h2>
                    <p className="mt-3 text-base text-gray-600">CropVenture bypasses the complex system of exploitative middlemen and agents thst involves unnecessary detours in the journey of the produce from farm to consumer.</p>
                </div>

                <div className="py-9">
                    <h2 className="text-xl font-semibold text-black">What benefits does an associated farmer get?</h2>
                    <ul className="mt-3 text-base text-gray-600 list-disc">
                    <li className=''>Produce is directly bought and transported from the farm itself. No need for transporting produce to agents or APMC yards/mandis. </li>
                    <li className=''>Produce is bought at profitable rates compared to that provided at mandis as unnecessary expenses are avoided.</li>
                    <li className=''>24x7 Expert consultancy is available for any concerns. Fast response and professional solutions guaranteed.</li>
                    <li>All procedures are executed through legal contracts to ensure credibility.</li>
                    </ul>
                </div>

                <div className="py-9">
                    <h2 className="text-xl font-semibold text-black">How are payment transactions executed?</h2>
                    <p className="mt-3 text-base text-gray-600">Swift and hassle-free bank-to-bank digital transactions with registered bank account.</p>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>

      </div>
      </div>
  )
}

export default Farmer