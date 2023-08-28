const pool = require("../../db");
const queries = require("./queries");

const getUser = (req, res) => {
    pool.query(queries.getall, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
  const del=(req,res)=>{
    const email=req.params.email;
    pool.query(queries.del,[email],(error,results)=>{
      if(error) throw error;
      res.status(200).send("deleted");
    })
  }

  module.exports={
    getUser,del,
  }