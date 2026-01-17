import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState<any>();
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [filterData, setFilterData] = useState<any>();

  // we can customize the limit according to the needs
  const limit = 10;

  useEffect(() => {
    fetchData();
  }, []);

  // we will be using json placeholder for the data and fetch for fetching the data
  const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await resp.json();
    console.log('resp', response);
    setData(response);
    setFilterData(response);
  };

  // implement pagination
  const nextIndex = () => {
    if (pageIndex < Math.ceil(filterData.length / limit)) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const prevIndex = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  // pageIndex * limit = starting index
  // pageIndex * limit + limit = last index

  return (
    <div className='fetchContainer'>
      <ul className='unorder-list'>
        {filterData?.length > 0 &&
          filterData
            .slice(pageIndex * limit, pageIndex * limit + limit)
            .map((user: any, index: any) => {
              return (
                <>
                  <li
                    key={index}
                    className='list-div'
                    style={{
                      padding: '10px',
                      marginBottom: '5px',
                      listStyle: 'none',
                      backgroundColor: 'gray',
                      borderRadius: '10px',
                    }}>
                    id:{user?.id} title:{user?.title}
                  </li>
                </>
              );
            })}
      </ul>
      <div className='button-div'>
        <button
          onClick={prevIndex}
          disabled={pageIndex === 0}>
          Prev
        </button>
        <button
          onClick={nextIndex}
          disabled={
            pageIndex === Math.max(Math.ceil(filterData?.length / limit) - 1, 0)
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchData;
