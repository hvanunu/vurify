import { Application } from '../declarations';
import partners from './partners/partners.service';
import { Paginated } from '@feathersjs/feathers';
import extractDomain from "extract-domain";

import signatures from './signatures/signatures.service';
import users from './users/users.service';

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {

  app.get("/iframe/:apiKey", function(req: any, res: any){
    let apiKey = req.params.apiKey
    const items = app.service("partners").find({"apiKey": apiKey})
      .then(value => {
        let partner : any
        let dbRes = (value as Paginated<any>)
        if(dbRes.total > 0){
          partner = dbRes.data[0]
          const parseResult = extractDomain(req.hostname, { tld: true });
          //console.log(parseResult)
          if(partner.domain == req.hostname){
            console.log("match")
            res.render('iframe', partner)
          }
        }
      })
      .catch(reason => {
        console.error(reason)
      })
  })

  app.get("/parent_v1", function(req: any, res: any){
    res.render('v1_login')
  })

  app.get("/signature", function(req: any, res: any){
    res.render('signature')
  })
  
  app.configure(partners);
  app.configure(signatures);
  app.configure(users);
}
