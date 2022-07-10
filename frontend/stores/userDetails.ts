import { defineStore } from "pinia";

import { registerUserService } from "@/services/auth";
import { UserRegistrationForm } from "../../types";

interface UserDetailsStore {
  isLoggedIn: boolean;
  email: string;
}

interface UserDetailsActions {
  login: (email: string, password: string) => void;
  registerUser: (registerData: UserRegistrationForm) => Promise<boolean>;
}

export const useUserDetails = defineStore<
  "userDetails",
  UserDetailsStore,
  {},
  UserDetailsActions
>("userDetails", {
  state: () => ({
    isLoggedIn: false,
    email: "",
  }),

  actions: {
    login(email: string, password: string) {
      if (email && password) {
        this.isLoggedIn = true;
        this.email = email;
      }
    },
    async registerUser(registerData: UserRegistrationForm) {
      const userRegistrationResponse = await registerUserService(registerData);

      if (userRegistrationResponse.status.toString().startsWith("2")) {
        return true;
      } else {
        return false;
      }
    },
  },
});
