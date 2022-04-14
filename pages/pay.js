import { useState } from 'react';

// Parses the JSON returned by a network request
const parseJSON = resp => (resp.json ? resp.json() : resp);
// Checks if a network request came back fine, and throws an error if not
const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then(resp => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};

const Pay = ({ allOrders, errorOrders }) => {
  const [modifiedData, setModifiedData] = useState({
    quantity: '',
    total: '',
    phone: '',
    pickup_date: '',
    pickup_time: '',
    product: {},
  });
  const [errorOrders, setErrorOrders] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1337/api/orders?populate+*', {
        method: 'POST',
        headers,
        body: JSON.stringify(modifiedData),
      })
        .then(checkStatus)
        .then(parseJSON);
    } catch (error) {
      setErrorOrders(error);
    }
  };

  /*const renderCheckbox = order => {
    const { orders } = modifiedData;
    const isChecked = orders.includes(order.id);
    const handleCheckboxChange = () => {
      if (!orders.includes(order.data.id)) {
        handleChange({ target: { name: 'orders', value: categories.concat(category.id) } });
      } else {
        handleChange({
          target: { name: 'orders', value: categories.filter(v => v !== category.id) },
        });
      }
    };
    return (
      <div key={category.id}>
        <label htmlFor={category.id}>{category.name}</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name="categories"
          id={category.id}
        />
      </div>
    );
  };*/

  if (errorOrders) {
    return <div>An error occured (orders): {errorOrders.message}</div>;
  }
  if (errorOrders) {
    return <div>An error occured (orders): {errorOrders.message}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Restaurants</h3>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={modifiedData.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={modifiedData.description}
            onChange={handleChange}
          />
        </label>
        <div>
          <br />
          <b>Select categories</b>
          <br />
          {allCategories.map(renderCheckbox)}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const allCategories = await fetch('http://localhost:1337/api/categories', {
      method: 'GET',
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return { allCategories };
  } catch (errorCategories) {
    return { errorCategories };
  }
};
export default Pay;
 