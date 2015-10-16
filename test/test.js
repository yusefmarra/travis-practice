var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');

var should = chai.should();

chai.use(chaiHttp);


describe('/ route', function() {
  it('Should return 200', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  // it('Should return 404', function(done) {
  //   chai.request(server)
  //     .get('/')
  //     .end(function(err, res) {
  //       res.should.have.status(404);
  //       done();
  //     });
  // });
});
