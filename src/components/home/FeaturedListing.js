import React, { useEffect, useState } from "react";import styled from 'styled-components';
import FeaturedCard from '../../styled/FeaturedCard';
import Heading from '../../styled/Heading';

const Wrapper = styled.section`
    padding:5%;
    @media(min-width:992px){
        padding:5% 10%;
    }
    h2{
        margin-bottom:20px;
    }
    .inner{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
`

function FeaturedListing() {

    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((data) => setUser(data));
      }

  return (
    <Wrapper>
        <Heading>Products Near ME</Heading>
        <div className="inner">
            <FeaturedCard description="lorem ipsum dolor">
            {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
            </FeaturedCard>




            {/* <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/> */}
        </div>
    </Wrapper>
  )
}

export default FeaturedListing