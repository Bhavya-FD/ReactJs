import FooterComponent from "./MyntraProjectComponents/FooterComponent";
import HeaderComponent from "./MyntraProjectComponents/HeaderComponent";
import Section1Component from "./MyntraProjectComponents/Section1Component";
import Section2Component from "./MyntraProjectComponents/Section2Component";
import Section3Component from "./MyntraProjectComponents/Section3Component";

export default function App() {
  return (
    <div className="main">
      <h1 id="heading">Hello This is Main Heading</h1>
      <HeaderComponent/>
      <Section1Component/>
      <Section2Component/>
      <Section3Component/>
      <FooterComponent/>
    </div>
  )
}
