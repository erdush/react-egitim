import { Middleware } from "./middleware";

let middleware: Middleware = new Middleware();
middleware.SetPerson({
  city: "İstanbul",
  headofficeemployee: true,
  name: "Ahmet",
  surname: "Demir",
});
