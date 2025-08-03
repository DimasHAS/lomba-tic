from __future__ import print_function
import time
import weatherapi
from weatherapi.rest import ApiException
from pprint import pprint

# Configure API key authorization: ApiKeyAuth
configuration = weatherapi.Configuration()
configuration.api_key['key'] = 'YOUR_API_KEY'

# Create an instance of the API class
api_instance = weatherapi.APIsApi(weatherapi.ApiClient(configuration))

def get_current_weather(location):
    try:
        api_response = api_instance.realtime_weather(q=location)
        print(f"Current Weather for {location}:")
        pprint(api_response)
    except ApiException as e:
        print(f"Exception when calling APIsApi->realtime_weather: {e}")

def get_forecast_weather(location, days):
    try:
        api_response = api_instance.forecast_weather(q=location, days=days)
        print(f"Forecast Weather for {location} for {days} days:")
        pprint(api_response)
    except ApiException as e:
        print(f"Exception when calling APIsApi->forecast_weather: {e}")

def search_location(query):
    try:
        api_response = api_instance.search_autocomplete_weather(q=query)
        print(f"Search results for '{query}':")
        pprint(api_response)
    except ApiException as e:
        print(f"Exception when calling APIsApi->search_autocomplete_weather: {e}")


















if __name__ == "__main__":
    # Replace 'YOUR_API_KEY' with your actual API key
    configuration.api_key['key'] = '418996fbee504927bcd131808252407'

    print("\n--- Testing Current Weather API ---")
    location = input("Enter location (e.g., London, New York): ")

    print("\n--- Testing Current Weather API ---")
    get_current_weather(location)

    print("\n--- Testing Forecast Weather API ---")
    get_forecast_weather(location, 3)

    print("\n--- Testing Search/Autocomplete API ---")
    search_location(location)