import "./style.css";
function Button(props) {
  const text = props.text;
  return <button className="button">{text}</button>;
}
export default Button;
