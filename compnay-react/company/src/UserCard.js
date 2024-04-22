function UserCard({ user }) {
  return (
    <div className="col-md-3">
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div>Country: {user.country}</div>
      <div>Occupation: {user.occupation}</div>
      <div>Company: {user.company}</div>
      <div>Salary: {user.salary}</div>
      <div>Married: {user.married ? "Yes" : "No"}</div>
      <div>Children: {user.children}</div>
      <div>Foods: {user.pets.join(", ")}</div>
    </div>
  );
}
export default UserCard;
