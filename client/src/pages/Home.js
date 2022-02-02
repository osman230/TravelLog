import React from "react";
import { useQuery } from '@apollo/client';
import Footer from "../components/Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Nav from "../components/Nav";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className=''>
        <div className=''>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thoughts(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
  