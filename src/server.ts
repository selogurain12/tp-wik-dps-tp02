import * as express from 'express';
const url = require('url');
import { Application, Response, Request } from 'express';
const PORT = 3000;
const app:Application = express();
app.get('/ping', (req:Request, res:Response)=>{
    if(req.method ==='GET' && req.url === '/ping'){
        res.json(req.headers);
    }else{
        res.status(404).end();
    }
}
)
app.use((req: Request, res: Response) => {
    res.status(404).end();
});
app.listen(PORT, ()=>{
    console.log('Server Express with Typescript is runing on port 3000')
})  