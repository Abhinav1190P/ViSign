import cv2 
import base64
import numpy as np
from flask import Flask, request
from flask_cors import CORS,cross_origin

app = Flask(__name__)
CORS(app)



@app.route('/processframe',methods=['POST'])
@cross_origin()
def ProcessFrames():
    data = request.get_json()['image_data']
    image_bytes = base64.b64decode(data.split(',')[1])
    image_array = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
    print(data)
    return data



if __name__ == '__main__':
    app.run()