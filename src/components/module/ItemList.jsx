const ItemList = ({ data }) => {
  return (
    <>
      {data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </>
  );
};

export default ItemList;
