import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import User from "./models/User.js";
import type { IUser } from "./models/User.js";

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());

interface CustomRequest extends Request {
  startTime?: number;
}

app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript from Express");
});

interface User {
  name: string;
  email: string;
}

// Generic: Request<Params, ResponseBody, RequestBody, QueryString>
app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `User created with username: ${name}, email: ${email}`,
  });
});

app.get("/user/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({
    userId: id,
  });
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find({});
  } catch (error) {
    res.status(400).json({ message: "Some error occured!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
