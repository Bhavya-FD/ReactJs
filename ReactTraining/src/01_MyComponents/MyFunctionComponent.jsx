
export default function MyFunctionComponent() {
    const subjectList = ["C","C++","java","Python","Javascript"]
  return (
    <div>
        {subjectList.map((e,i)=>{
            return <h1 key={i}>{e}</h1>
        })}
    </div>
  )
}
