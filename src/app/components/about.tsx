import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <h2 className="font-extrabold text-white text-5xl text-center">About Us!</h2> {/* Changed div to h2 for semantic heading */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="title-font sm:text-xl text-3xl mb-4 font-bold text-white">
              Pakistan is home to some of the most stunning and diverse waterfalls, offering breathtaking views and serene natural beauty. From the majestic Dudipatsar Waterfalls in the Kaghan Valley, surrounded by snow-capped mountains, to the lush greenery framing Umbrella Waterfall near Abbottabad, each has its own charm. The shimmering Neela Sandh Waterfall in Azad Kashmir, with its crystal-clear blue waters, attracts nature lovers and adventurers alike. In Sindh, the Chotok Waterfall emerges as an oasis in the arid landscape, creating a magical contrast. These waterfalls not only provide a tranquil escape but also showcase Pakistan&apos;s rich and varied topography, making them a must-visit for travelers seeking peace and adventure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
