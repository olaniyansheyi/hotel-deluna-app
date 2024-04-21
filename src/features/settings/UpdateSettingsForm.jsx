import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";

import Spinner from "../../ui/Spinner";
import { useEditSettings } from "./useEditSettings";

//NOTE: I DIDI THE MISTAKE OF LENGHT INSTED OF LENGTH....LET IT STAY LIKE THAT IN THIS COMPONENT

function UpdateSettingsForm() {
  // const {
  //   isLoading,
  //   settings: {
  //     minBookingLenght,
  //     maxBookingLenght,
  //     maxGuestsPerBooking,
  //     BreakfastPrice,
  //   } = {},
  // } = useSettings();
  const {
    isLoading,
    settings: {
      minBookingLenght,
      maxBookingLenght,
      newGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useEditSettings();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minBookingLenght}
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingLenght}
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={newGuestsPerBooking}
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "newGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
