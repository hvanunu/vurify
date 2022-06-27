import { Application } from '../declarations';
import users from './users/users.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.get("/iframe/:apiKey", function(req: any, res: any){
    res.render('iframe', {apiKey: req.params.apiKey})
  })

  app.get("/parent_v1", function(req: any, res: any){
    res.render('v1_login')
  })
}
