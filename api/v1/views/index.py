#!/usr/bin/python3
from models.amenity import Amenity
from models.city import City
from models.place import Place
from models.review import Review
from models.state import State
from models.user import User
from models import storage
from api.v1.views import app_views
from flask import jsonify


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def api_status():
    """API Status"""
    return jsonify({"status": "OK"})


@app_views.route('/stats', methods=['GET'], strict_slashes=False)
def get_object_count():
    """Retrieve the count of each object type"""
    classes = [Amenity, City, Place, Review, State, User]
    name_list = ["amenities", "cities", "places", "reviews", "states", "users"]

    object_counts = {}
    for i in range(len(classes)):
        object_counts[name_list[i]] = storage.count(classes[i])

    return jsonify(object_counts)

