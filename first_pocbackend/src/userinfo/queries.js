const getall="SELECT *FROM userinfo";
const del = "DELETE FROM userinfo  WHERE email=$1";

module.exports={
    getall,del
}