import { atom } from "recoil";

export const user = atom({
  key: "user",
  default: {
    idx: null,
    user_id: "",
    user_type: "",
    lastFromip: "",
    user_name: "",
    user_attendanceNumber: null,
    class_id: null,
    account_amount: null,
    deposit_authority: false,
    withdraw_authority: false,
    full_view_authority: false,
  },
});
