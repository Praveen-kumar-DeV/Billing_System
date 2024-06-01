const Orders = require("../models/accounts");
const Counter = require("../models/counter");


exports.orders= async(req,res)=>{

 
    const Doc = await Counter.findOneAndUpdate(
        { id: "autoIncrement" },
        { $inc: { seq: 1 } },
        { new: true,upsert:true }
      ); 
   
      if (!Doc) {
        return res.status(500).send("Error generating order ID"); 
      }
    
      const orderId = Doc.seq; 
    
      const data = new Orders({
        order_Id: orderId,
       [req.body.Item]: req.body.Quantity,
     
        amount:req.body.amount,
      });
    
     const d= await data.save();
     console.log(d);

    
    
      res.send("posted");
}

exports.list = async(req,res) => {
     
    
    const data = await Orders.find();
    res.send(data);
}
