
const ArrayMap = (props) => {
  const data = [
    {name: "Kim", email: "Kim@tree.com"},
    {name: "Han", email: "Han@river.com"},
    {name: "Park", email: "Park@water.com"},
  ]
  return(
    <div>
      <h2 className="blue">{props.title}</h2>
      <ul>
        {data.map((item, key) => (
          <li>{item.name}[{item.email}]</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayMap;