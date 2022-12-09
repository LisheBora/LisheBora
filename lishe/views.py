from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, 'index.html')

def farmer(request):


  return render (request, 'dashboards/farmers.html')