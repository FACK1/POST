const test = require('tape');
const supertest = require('supertest');
const fs = require('fs');
const path = require('path');
const router = require('../server/router');
test('Testing tape', (t) => {
const expected = '';
const accuual = '';
t.equal(accuual, expected, 'Should return empty string');
t.end();
});
test('Testing homeHandler', (t) => {
supertest(router)
.get('/')
.expect(200)
.expect('Content-Type', /html/)
.end((error, result) => {
t.error(error);
t.end();
});
});
test('Testing publicHandler ', (t) => {
supertest(router)
.get('/index.html')
.expect(200)
.expect('Content-Type', /html/)
.end((error, result) => {
t.error(error);
const actual = result.text.includes('
<title> post</title>
');
const expected = true;
t.equal(actual, expected, 'response should contains title tag');
t.end();
});
});
test('Testing pageNotFoundHandler', (t) => {
supertest(router)
.get('/pageNotFound')
.expect(404)
.end((err, res) => {
t.error(err);
t.equal(res.statusCode, 404, 'response should be 404');
t.end();
});
});
