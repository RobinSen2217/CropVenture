import React from 'react'

function About(props) {
  document.title=`Cropventure - ${props.title}`
  return (
    <div>
<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 border-b border-gray-300">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-5xl font-bold leading-9 text-black  pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to CropVenture, where innovation meets cultivation! We are at the forefront of driving sustainable and cutting-edge solutions to revolutionize the way we grow food, preserve the environment, and enhance agricultural practices. With a deep-rooted passion for agriculture and a commitment to the betterment of our planet, we strive to empower farmers and agribusinesses with the latest technologies and expert guidance. As an agriculture solutions company, we are committed to fostering strong partnerships with farmers and industry stakeholders. By understanding the unique challenges faced by each region and cultivating tailor-made solutions, we ensure that our interventions are relevant, effective, and yield long-term benefits. Join us on this transformative journey as we work hand in hand to build a world where agriculture flourishes sustainably, and future generations can enjoy the bounties of the land. Together, we can sow the seeds of prosperity, nurture growth, and harvest a better tomorrow. </p>
            <h1 className="text-xl lg:text-2xl font-bold leading-9 text-black  pb-4 pt-5">Our Vision</h1>
            <p className="font-normal text-base leading-6 text-gray-600 "> Our vision is to lead the agricultural revolution towards a sustainable and resilient future. We envision a world where innovative technologies, responsible practices, and empowered farmers converge to create bountiful harvests, preserve natural ecosystems, and nourish communities. </p>

        </div>
        <div className="w-full lg:w-8/12 h-full">
            <img className="w-full my-auto" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
    </div>
    </div>

<div>
<section className="text-gray-600 body-font border-b border-gray-300">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl md:text-5xl font-medium title-font mb-2 text-gray-900">Our Mission</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Our mission is to empower farmers with cutting-edge solutions and expert guidance to cultivate the land sustainably. We are committed to providing holistic and integrated agricultural solutions that optimize productivity, conserve resources, and promote environmental stewardship.
</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
  
           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Solving Middlemen Exploitation problem</h2>
          <p className="leading-relaxed text-base">As an agricultural solutions company, one of our key objectives is to address the issue of middlemen exploitation in the agricultural supply chain. Middlemen, often known as intermediaries or commission agents, act as facilitators between farmers and consumers, but they can sometimes exploit their position to the detriment of both parties. 
</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Quality Control and Assurance</h2>
          <p className="leading-relaxed text-base">As part of our commitment to maintaining high-quality standards, we conduct rigorous quality checks on the purchased produce. This ensures that farmers are incentivized to deliver produce of superior quality, thereby enhancing their market value and returns.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Innovation and Technology</h2>
          <p className="leading-relaxed text-base">We strive to be at the forefront of agricultural innovation, leveraging the latest technologies and data-driven insights to enhance farming practices. Through our efficient website, we provide excellent services to both farmers and retailers.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Good Pricing Point</h2>
          <p className="leading-relaxed text-base">We understand the importance of providing cost-effective solutions to farmers. We strive to offer fair pricing that balances the need for accessibility for farmers with ensuring a profiting value for our company. Our pricing structure is designed to reflect the true value of our solutions while remaining competitive in the market.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Timely Payments</h2>
          <p className="leading-relaxed text-base">Prompt payment is an integral part of our approach. We make sure to provide timely payment to farmers upon the purchase of their produce. This financial security allows farmers to manage their expenses, invest in their farms, and improve their livelihoods.
</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Long-Term Partnerships</h2>
          <p className="leading-relaxed text-base">We aim to build long-term partnerships with farmers, fostering a sense of trust and reliability. Through consistent and reliable transactions, farmers can rely on us as a stable and dependable buyer, reducing the need for middlemen involvement.
</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Market Access</h2>
          <p className="leading-relaxed text-base">Our well-established market connections and distribution network facilitate the smooth flow of produce from our storage units to various retailers. This helps farmers access a wider customer base and diverse market opportunities, reducing their dependence on limited local retailers.
</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Direct Purchase at Market Rate</h2>
          <p className="leading-relaxed text-base">Our company directly purchases agricultural produce from farmers at the prevailing market rate and in accordance to <span className='text-green-600'>Agricultural Pricing Policy,1964.</span> By eliminating middlemen, we ensure that farmers receive fair and competitive prices for their crops. Our transparent pricing policy guarantees that farmers are not subject to price manipulations or arbitrary deductions.
</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">

           <h2 className="text-green-700 text-lg font-medium title-font mb-2">Reducing Crop Loss</h2>
          <p className="leading-relaxed text-base">By reducing the number of middlemen and bypassing the redundantly complex system, we also reduce the crop loss that occurs in transportation and at each step of the process significantly.
</p>
        </div>
      </div>


    </div>
  </div>
</section>
</div>

    <div className='border-b border-gray-300'>
      <h1 className='text-center mt-11 font-bold text-5xl'>Our Process</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
   
          <img src="https://thumbs.dreamstime.com/b/white-document-pen-icon-isolated-long-shadow-file-checklist-business-concept-green-circle-button-vector-207414450.jpg" alt="" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Registration</h2>
          <p className="leading-relaxed">Associate Frarmers and Retailers are first registered with the company through extensive legal contracts.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
     
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZoKGEP_zjOYcohXHIXYP7okIqbPG3Evv7JRQ_47yMtqXG9LHa9r1FxNyLfI0sNGH9SE&usqp=CAU" alt="" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Purchasing Produce</h2>
          <p className="leading-relaxed">In the Harvest season,the freshly cut high quality produce is bought directily from farmers at rates profitable to farmers in accordance to Agricultural Price Policy, 1964.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
        
          <img src="https://cdn-icons-png.flaticon.com/512/9096/9096015.png" alt="" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Storage</h2>
          <p className="leading-relaxed">The produce bought to transported from farms to state of the art storage facilities including godowns, silos, cold storage,etc. for preservation of both perishable and non-perishable goods.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          
          <img src="https://media.istockphoto.com/id/898475764/pt/vetorial/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=7UvoO8uQBi1B2P37wSiwMSN-NmNBSXOnyVAHzgvYedI=" alt="" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Selling to Associate Retailers</h2>
          <p className="leading-relaxed">The high quality goods are stored till best market price is available and then sold to our Associate Retailers.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl md:text-5xl title-font text-center text-gray-900 mb-20 font-bold">Future Ventures</h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
          <img src="data:image/png;base64,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" alt="tractor" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Machine on Rent</h2>
          <p className="leading-relaxed text-base">Our machine on rent services will encompass a wide range of agricultural machinery and equipment. This includes tractors, harvesters, planters, sprayers, irrigation systems, and more. We will ensure that our rental fleet comprises reliable, well-maintained machines from reputable brands.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-green-500 mb-4 flex-shrink-0">

                    <img src="https://www.seekpng.com/png/detail/935-9351472_cloud-icon-internet-cloud-green-png.png" alt="cloud"  className='rounded-full'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Live Weather Forecasting & Alerts</h2>
          <p className="leading-relaxed text-base"><span className='underline'>Real-Time Weather Insights:</span> Our Live Weather Forecasting feature will provide up-to-date weather information, including temperature, humidity, precipitation, wind speed, and more. With live data streams, they will be able to  access accurate weather insights at any time, enabling them to plan their farming activities with precision.<br/><br/>
<span className='underline'>Weather Alerts:</span> Nature can be unpredictable, but our platform will keep you informed. Receive instant weather alerts straight to your device when adverse conditions are detected, such as heavy rainfall, frost, extreme temperatures, or potential storms. Stay informed of weather events that could impact your crops or livestock, allowing you to take proactive measures to protect your investments.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
    
          <img src="https://us.123rf.com/450wm/tawatchaimaneewan/tawatchaimaneewan1410/tawatchaimaneewan141000032/32198770-wheat-vector.jpg?ver=6" alt="crop" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Crop Price Monitoring</h2>
          <p className="leading-relaxed text-base">Our Crop Price Monitoring feature will offer farmers real-time access to market prices set by the government  for various crops.They will stay informed about the latest buying and selling rates, both locally and nationally, right at your fingertips. With live data streams, they will be able to make timely decisions to sell their produce at the best possible prices because otherwise the middlemen would take advantage of them and buy the produce at low rates.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
