from django.shortcuts import render


# Create your views here.
def farmers(request):
  return render(request, 'farmers.html')