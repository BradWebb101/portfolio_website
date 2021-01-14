import boto3
from botocore.exceptions import ClientError

import os

class dynamo_db():
    
    def __init__(self):
        self.connection = None
        self.dynamo_connect()
        self.portfolio_data()

     
    def dynamo_connect(self):
        self.connection = boto3.client(
            'dynamodb',
            aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
            region_name=os.getenv('AWS_DEFAULT_REGION')
            )
        
    def portfolio_data(self):
        try:
            self.data =  self.connection.scan(
                    TableName='portfolio_details'
            )['items']
             
        except ClientError as e:
            self.data = {}
    
if __name__ == '__main__': 
    dynamo_db()