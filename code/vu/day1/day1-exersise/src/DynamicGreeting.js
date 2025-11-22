function DynamicGreeting({ name, time }) {
  let greeting;

  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <h1>
      {greeting}, {name}! 👋
    </h1>
  );
}

export default DynamicGreeting;
