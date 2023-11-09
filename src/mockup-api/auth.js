import { Model } from "miragejs";
import { createServer } from "miragejs";

export default function () {
  createServer({
    models: {
      users: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post("/users", (schema, request) => {
        const payload = JSON.parse(request.requestBody);

        return schema.users.create(payload);
      });
    },
  });
}
