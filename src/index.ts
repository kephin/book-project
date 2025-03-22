import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

const port = process.env.PORT ?? "8000";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
