import React from "react";

import SocialCard from "./components/SocialCard";

const cardData = {
  pp: `https://media.licdn.com/dms/image/C5603AQEU5QEMsZcT3g/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=City4XWIIVpPzLL7FPtcbtwQnLkfZZRkA9_3vsseBrA`,
  name: "Zahid Bilal Özgen",
  userName: "zbilalozgen",
  date: "04 Nov",
  tweet: `Learning React? Start Small! <br/> {author: @someguy}`,
  image:
    "http://res.cloudinary.com/practicaldev/image/upload/c_fit,co_rgb:fcfcfc,h_270,l_text:Montserrat_74:Learning%2520React%3F%2520Start%2520Small.,w_810/c_fit,co_rgb:00c673,g_north_east,h_499,l_text:Roboto%20Mono_44:Dave%20Ceddia,w_716,y_421,x_185/v1489507069/devsocial_base_code1_itwdxx.png?default&t=1498139950",
  cardHead: "Learning React? Start Small!",
  cardBody:
    "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
  mentions: "9",
  rts: "17",
  favs: "62"
};

function App() {
  return (
    <div>
      <SocialCard {...cardData} />
    </div>
  );
}

export default App;
