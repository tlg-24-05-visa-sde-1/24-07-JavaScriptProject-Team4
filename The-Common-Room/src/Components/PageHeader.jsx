function PageHeader(house) {
  return (
    <>
      if(!house) {(house = "Hogwarts")}
      <h1>{house}</h1>;<p>Welcom to {house} Wizards and Witches</p>;
    </>
  );
}

export default PageHeader;
