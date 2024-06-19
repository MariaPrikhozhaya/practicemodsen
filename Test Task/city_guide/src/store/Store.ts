import { makeAutoObservable } from "mobx";


export default class Store {
  isAuth = false;
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(email: string, password: string) {
    try {
        if (password.length >= 4 && password.length && /\S+@\S+\.\S+/.test(email)) {
            localStorage.setItem("auth", "true");
            this.setIsLoading(true);
            this.setIsAuth(true);
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  async registration(email: string, password: string, passwordCheck: string) {
    try {
      if (password.length >= 4 && password.length && password === passwordCheck) {
        localStorage.setItem("auth", "true");
        this.setIsLoading(true);
        this.setIsAuth(true);
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("auth");
      this.setIsLoading(true);
      this.setIsAuth(false);
    } catch (error) {
      console.error("Error", error);
    }
  }
}