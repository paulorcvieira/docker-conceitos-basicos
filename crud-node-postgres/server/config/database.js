/********************************************************
Database Connection Settings
*********************************************************/
const container_db_host = "172.17.0.4";
const container_db_pass = "postgres";
const container_db_name = "crud-node";


exports.conString = "postgres://postgres:"+container_db_pass+"@"+container_db_host+"/"+container_db_name;



// module.exports = {
//    query: function(text, values, cb) {
//       pg.connect(function(err, client, done) {
//         client.query(text, values, function(err, result) {
//           done();
//           cb(err, result);
//         })
//       });
//    }
// }

