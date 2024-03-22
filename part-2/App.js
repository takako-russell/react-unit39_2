const App = () => {
  return (
    <div>
      <Tweet
        username="Pokemon"
        name="Wabi"
        date={new Date().toDateString}
        message="I want food"
      />
      <Tweet
        username="Kimetsu"
        name="Elsa"
        date={new Date().toDateString}
        message="I love Demon Slayer"
      />
      <Tweet
        username="Dune"
        name="Soph"
        date={new Date().toDateString}
        message="I love Timothee"
      />
    </div>
  );
};
