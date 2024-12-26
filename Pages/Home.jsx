import React from "react";
import BottomNav from "./BottomNav";
import HomeBody from "./HomeBody";
import Favourites from "./Favourites";
import Account from "./Account";
import Category from "./Category";

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <BottomNav activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 1 ? (
        <HomeBody navigation={navigation} />
      ) : activeTab === 2 ? (
        <Favourites />
      ) : activeTab === 3 ? (
        <Account />
      ) : (
        <Category />
      )}
    </BottomNav>
  );
};

export default Home;
