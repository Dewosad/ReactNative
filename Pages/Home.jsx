import React from "react";
import Layout from "./Layout";
import HomeBody from "./HomeBody";
import Favourites from "./Favourites";
import Account from "./Account";
import Category from "./Category";

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 1 ? (
        <HomeBody navigation={navigation} />
      ) : activeTab === 2 ? (
        <Favourites />
      ) : activeTab === 3 ? (
        <Account />
      ) : (
        <Category />
      )}
    </Layout>
  );
};

export default Home;
