import Button from "../components/Button";
import { GoBell, GoBrowser } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>
        <Button primary rounded onClick={ handleClick }>
          <GoBell />
          Click!
        </Button>
      </div>
      <div>
        <Button success>
          <GoBrowser />
          Yes
        </Button>
      </div>
      <div><Button secondary>Ok</Button></div>
      <div><Button warning outline>No</Button></div>
      <div><Button danger rounded>No</Button></div>
    </div>
  );
}

export default ButtonPage;
