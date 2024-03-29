const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (message === "hi")
          resolve("Hello! Welcome to Travigo! How may I help you?");
        if (message.includes("book a hotel")) {
          resolve(
            "Great! Please enter your travel dates and number of people."
          );
        }
        const regex = /\d/;

        // Test the string against the regular expression
        if (message.includes("/")) {
          resolve(
            "Great! Do you need Premium Rooms or Deluxe Rooms or Standard Rooms?"
          );
        }
        if (
          message.includes("Premium") ||
          message.includes("Deluxe") ||
          message.includes("Standard")
        ) {
          resolve("Okay!! Do you need extra beds?");
        }
        if (message.includes("Yes") || message.includes("No")) {
          resolve(
            "Excellent! Any extra requirements you want to add on? Like breakfast, lunch, dinner, dessert?"
          );
        }
        if (
          message.includes("breakfast") ||
          message.includes("lunch") ||
          message.includes("dinner") ||
          message.includes("dessert")
        ) {
          resolve(
            "Okay! Please tell us your budget within which you are searching rooms.."
          );
        }
        if (regex.test(message)) {
          resolve(
            "We are good to go now. In the meantime we recommend you hotels, please enter your name."
          );
        }
        if (message.includes("My name is") || message.includes("I am")) {
          message = message.trim();

          // Split the sentence into words using space as delimiter
          const words = message.split(" ");

          // Return the last word
          let name_customer = words[words.length - 1];
          resolve("Okay! " + name_customer + " Please enter your email id");
        }
        if (message.includes("@")) {
          resolve(
            "Okay! Please enter your phone number with the country code.."
          );
        }
        if (message.includes("+")) {
          resolve("Please enter the country you want to stay in");
        }
        if (
          message === "United States" ||
          message === "United Kingdom" ||
          message === "Italy" ||
          message === "Mexico" ||
          message === "Switzerland" ||
          message === "Tanzania" ||
          message === "Netherlands" ||
          message === "Fiji" ||
          message === "Indonesia" ||
          message === "Canada" ||
          message === "Thailand" ||
          message === "United Arab Emirates" ||
          message === "Greece" ||
          message === "Costa Rica" ||
          message === "Japan" ||
          message === "Maldives"
        ) {
          const country_name = message;
          if (country_name === "United States")
            resolve(
              "There are a lot of options.. We recommend you.. Cozy BeachFront Cottage \nModern Loft in Downtown \nMountain Retreat \nScheduled Treehouse Getaway \nBeachFront Paradise \nRustic Cabin by the Lake \nLuxury Penthouse with City Views \nHistoric Canal House \nCharming Cottage in Cotswolds \nHistoric Brownstone in Boston \nLakefront Cabin in New Hampshire \nSki Chalet in Aspen \nSecluded Beach House in Costa Rica"
            );
          if (country_name === "Italy")
            resolve("We recommend you.. Historic Villa in Tuscany");
          if (country_name === "Mexico")
            resolve("We recommend you.. Beachfront Paradise");
          if (country_name === "Switzerland")
            resolve("We recommend you.. Ski-In/Ski-Out Chalet");
          if (country_name === "Tanzania")
            resolve("We recommend you.. Safari Lodge in the Serengeti");
          if (country_name === "Netherlands")
            resolve("We recommend you.. Historic Canal House");
          if (country_name === "Fiji")
            resolve("We recommend you.. Private Island Retreat");
          if (country_name === "United Kingdom")
            resolve(
              "We recommend you.. Charming Cottage in the Costwolds \nHistoric Castle in Scotland"
            );
          if (country_name === "Indonesia")
            resolve("We recommend you.. Beachfront Bungalow in Bali");
          if (country_name === "Canada")
            resolve(
              "We recommend you.. Mountain View Cabin in Banff \nLakefront Cabin in New Hampshire"
            );
          if (country_name === "Thailand")
            resolve("We recommend you.. Tropical Villa in Phuket");
          if (country_name === "United Arab Emirates")
            resolve("We recommend you.. Dessert Oasis in Dubai");
          if (country_name === "Greece")
            resolve("We recommend you.. Beachfront Villa in Greece");
          if (country_name === "Japan")
            resolve("We recommend you.. Modern Apartment in Tokyo");
          if (country_name === "Costa Rica")
            resolve(
              "We recommend you.. Secluded Beach House in Costa Rica \nEco-Friendly Treehouse Retreat"
            );
          if (country_name === "Maldives")
            resolve("We recommend you.. Luxury Villa in Maldives");
        }
        if (message.includes("Thank you")) {
          resolve(
            "We are happy to help you! Please visit us again. Thank you for using Travigo!"
          );
        } else resolve("We dont have " + message + " in our database. Please try again.");
      }, 2000);
    });
  },
};

export default API;
