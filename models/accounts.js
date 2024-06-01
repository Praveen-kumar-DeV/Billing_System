const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  order_Id: { type: Number },
  Plain_Dosa: { type: Number, default: 0 },
  Egg_Dosa: { type: Number, default: 0 },
  Special_Dosa: { type: Number, default: 0 },
  Dosa_Chicken: { type: Number, default: 0 },
  Pulao_Chicken_Curry: { type: Number, default: 0 },
  Pulao_Egg_Curry: { type: Number, default: 0 },
  Veg_Pulao: { type: Number, default: 0 },
  Water_Bottle: { type: Number, default: 0 },
  Punugulu: { type: Number, default: 0 },
  Mirchi_Bajji: { type: Number, default: 0 },
  Aloo_Bajji: { type: Number, default: 0 },
  Egg_Bajji: { type: Number, default: 0 },
  Soft_Drink: { type: Number, default: 0 },
  
  amount: { type: Number, default: 0 },
  date: {
    type: Date,
    
    default: Date.now
  }
});

const Orders = mongoose.model("Orders", accountSchema);

module.exports = Orders;
