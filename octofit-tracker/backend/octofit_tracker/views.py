from django.shortcuts import render
from django.http import JsonResponse

# Define views for users, teams, activity, leaderboard, and workouts here.

def api_root(request):
    return JsonResponse({
        "message": "Welcome to the OctoFit Tracker API!",
        "codespace_url": "https://literate-journey-x9qj56qgg4hv5px-8000.app.github.dev",
        "localhost_url": "http://localhost:8000",
    })
