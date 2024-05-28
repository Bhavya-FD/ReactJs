import FooterComponent from "./MyComponents/FooterComponent";
import HeaderComponent from "./MyComponents/HeaderComponent";
import Section1Component from "./MyComponents/Section1Component";
import Section2Component from "./MyComponents/Section2Component";
import Section3Component from "./MyComponents/Section3Component";

export default function App() {
  return (
    <div>
      <h1>This is a Heading</h1>
      <HeaderComponent/>
      <Section1Component/>
      <Section2Component/>
      <Section3Component/>
      <FooterComponent/>
    </div>
  )
}
