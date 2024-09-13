// cretaeing a http server
//express
// node default librtary

const express = require("express");

const app = express();

function sum(n) { m
    let ans = 0;
    for (let i =1; i<=n; i++){
        ans = ans + i;
    }
  return ans;
}
// req is request and res is response
app.get("/", function(req, res) {
      const n = req.query.n;
      const ans = sum(n);
      res.send("hi there ans is "  + ans)
})

app.listen(3000);
