import { Link } from "react-router-dom";

export default function Home() {
  return(
   <>
   <h1>Tady je Home</h1>
   <Link to={"/About"}>
      <p>About us</p>
   </Link>
   </>
  );
}