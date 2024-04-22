import UserCard from "./UserCard";
import CounterCard from "./CounterCard";
import TicToc from "./TicToc";
function Content() {
  const userData = [
    {
      name: "John",
      age: 30,
      city: "New York",
      country: "USA",
      occupation: "Software Engineer",
      company: "Google",
      salary: 50000,
      married: true,
      children: 2,
      pets: ["dog", "cat"],
    },
    {
      name: "Jane",
      age: 25,
      city: "London",
      country: "UK",
      occupation: "Data Scientist",
      company: "Facebook",
      salary: 60000,
      married: false,
      children: 0,
      pets: [],
    },
    {
      name: "Bob",
      age: 35,
      city: "Paris",
      country: "France",
      occupation: "Software Developer",
      company: "Microsoft",
      salary: 70000,
      married: true,
      children: 3,
      pets: ["bird", "fish"],
    },
  ];

  return (
    <div className="content ">
      <div className="row">
        {userData.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      <CounterCard></CounterCard>
      <TicToc></TicToc>
    </div>
  );
}
export default Content;
