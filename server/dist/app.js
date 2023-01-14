import Express from "express";
import cors from "cors";
const app = Express();
app.use(cors());
app.get("/test", (req, res) => {
    res.json({
        hello: "world",
    });
});
const port = 8000;
app.listen(port, () => {
    console.log(`Приложение запущено на ${port} порте`);
});
