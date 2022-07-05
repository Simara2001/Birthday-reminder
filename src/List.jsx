import React from 'react'

const List = (props) => {
    const {people} = props     //distructoring
    // console.log(props);
  return (
    <div>
        {people.map((person) => {
            const {id, name, age, image } = person;
            // console.log(id, name, age, image);
            return (
                <article key = {id} className='person'>
                  <img src={image} alt="picture" />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            )
        })} 
    </div>
  )
}

export default List