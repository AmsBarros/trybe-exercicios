import Title from "./title";
import ModuleDetails from "./module-details";
import { calculateAge } from "./age";

function HelloWorld() {
  const name = 'Amanda Barros';
  const birth = '20/10/1989';
  const age = calculateAge(birth);

  return (
    <div>
    <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
    <p>{`Age ${age}`}</p>
    <Title />
    <ModuleDetails />
  </div>
  )
}

export default HelloWorld;