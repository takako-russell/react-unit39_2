const Person = ({ name, age, hobbies }) => {
  let displayName = name;
  if (name >= 8) {
    displayName = name.slice(0, 6);
  }
  const goVote = age >= 18 ? "Please go vote!" : "You must be 18.";
  const liOfHobbies = hobbies.map((h) => {
    <li>{h}</li>;
  });
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name:{displayName}</li>
        <li>Age:{age}</li>
        <ul>Hobbies:{liOfHobbies}</ul>
        <h3>{goVote}</h3>
      </ul>
    </div>
  );
};
