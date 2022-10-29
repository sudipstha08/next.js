import React from "react";
import { FormWrapper } from "../FormWrapper";

type AccountData = {
  email?: string;
  password?: string;
};

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountProps) => {
  return (
    <FormWrapper title="User Account">
      <label>Email</label>
      <input
        required
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="passwprd"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export { AccountForm };
