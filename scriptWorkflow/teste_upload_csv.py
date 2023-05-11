import unittest
from script import Uploader

class uploaderTeste(unittest.TestCase):
    def teste_upload_missing(self):
        uploader = Uploader()
        value = uploader.upload_missing_csv()
        self.assertEqual(value, 1)

if __name__ == "__main__":
    unittest.main()
