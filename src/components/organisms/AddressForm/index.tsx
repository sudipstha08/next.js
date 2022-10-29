import { FormWrapper } from "../FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  zip,
  state,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="">Street</label>
      <input
        type="text"
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="">State</label>
      <input
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="">ZIP</label>
      <input
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
