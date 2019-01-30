import mongodb_client

def test_basic():
  db = mongodb_client.get_db('test')
  db.demo.drop()
  assert db.demo.count() == 0
  db.demo.insert({"test": 123})
  assert db.demo.count() == 1
  # db.demo.drop()
  # assert db.demo.count() == 0
  print 'test passed!'

if __name__ == "__main__":
  test_basic()