import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCarbins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCarbins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://ablkdixvjqytwgxmyxxf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
