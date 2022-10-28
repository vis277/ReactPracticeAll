const UseMemo = () => {
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </>
  );
};
