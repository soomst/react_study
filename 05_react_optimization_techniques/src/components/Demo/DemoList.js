import React, { useMemo } from 'react';

const DemoList = (props) => {
  const {items} = props;

  const sortedList = useMemo(()=> {
    return items.sort((a, b) => a-b )
  }, [items])
  console.log('DemoList RUNNING')

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item)=> (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoList;