export default function JsxExample() {
    const subject = "Javascript";

    // const greetingMsg = "<p>Good Morning</p>";
    const greetingMsg = <p>Good Morning</p>;
  return (
    <div>
        <h2>My Favuorite Subject is {subject}</h2>
        {greetingMsg}
    </div>
  )
}
