import { createDraftSafeSelector } from "@reduxjs/toolkit";
import userService from "@/services/user";

export const areasSelector = createDraftSafeSelector(
  [userService.endpoints.getUsers.select()],
  (queryState) => {
    return queryState.data?.map((item) => {
      return { id: item.id, value: item.area };
    });
  }
);

export const companySelector = createDraftSafeSelector(
  [userService.endpoints.getUsers.select()],
  (queryState) =>
    queryState.data?.map((item) => {
      return { id: item.id, value: item.company };
    })
);
