import React from "react";
import ContactCard from "../placeKittenComponent/contactCard";

function PlaceKitten() {
  return (
    <div className="contracts">
      <ContactCard
        contact={{
          imageUrl: "http://placekitten.com/300/200",
          name: "Mr. Whiskerson",
          phone: "Phone: (212) 553-1234",
          email: "Email: mr.whiskaz@test.com"
        }}
      />
      <ContactCard
        contact={{
          imageUrl: "http://placekitten.com/400/200",
          name: "Fluffykins",
          phone: "Phone: (212) 555-2345",
          email: "Email: fluff@me.com"
        }}
      />

      <ContactCard
        contact={{
          imageUrl: "http://placekitten.com/400/300",
          name: "Mr. Smartkitten",
          phone: "Phone: (212) 556-3456",
          email: "Email: smartkitty@me.com"
        }}
      />
      <ContactCard
        contact={{
          imageUrl: "http://placekitten.com/200/100",
          name: "Mr. FelixKitten",
          phone: "Phone: (212) 551-7890",
          email: "Email: mr.Felix@test.com"
        }}
      />
    </div>
  );
}
export default PlaceKitten;
