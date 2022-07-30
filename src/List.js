import React from 'react';

const List = ({people}) => {

  const birthdayList = people.map(({name, age, id, image}) => {
      return(
        <div key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>Name: {name}</h4>
              <p>Age: {age}</p>
            </div>
        </div>
      )
  })

  return (
    <>
      {birthdayList}
    </>
  );
};

export default List;
