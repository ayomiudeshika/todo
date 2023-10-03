import Checkbox from "./Checkbox";

export default function Tasks({done,name}) {
  return (
    <div className="tasks">
    <Checkbox defaultchecked={done}/>
      {name}
    </div>
  )
}
