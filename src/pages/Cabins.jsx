import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  // useEffect(function () {
  //   getCarbins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter/ sort</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
