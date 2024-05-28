
export default function JsxConditionalRendering() {
    const status = true;
  return (
    <div>
        {status && <h2>Hello User !</h2>}
    </div>
  )
}
