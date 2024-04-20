import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";

import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  // const {
  //   isLoading,
  //   settings: {
  //     minBookingLength,
  //     maxBookingLength,
  //     maxGuestsPerBooking,
  //     BreakfastPrice,
  //   } = {},
  // } = useSettings();
  const { isLoading, settings } = useSettings();

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    BreakfastPrice,
  } = settings || {};

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" defaultValue={minBookingLength} id="min-nights" />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" defaultValue={maxBookingLength} id="max-nights" />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={BreakfastPrice}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
