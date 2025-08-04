
import requests
from bs4 import BeautifulSoup
import re
import json

def get_harga_pangan():
    """
    Mengambil dan mem-parsing data harga pangan dari situs web Bank Indonesia.
    """
    url = "https://www.bi.go.id/hargapangan"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes

        soup = BeautifulSoup(response.text, 'html.parser')

        # Temukan semua tag <script>
        scripts = soup.find_all('script')

        for script in scripts:
            if script.string and 'VectorMap_Customize' in script.string:
                # Ekstrak objek JSON dari dalam skrip
                json_str = re.search(r'var jsonString = JSON.parse\(JSON.stringify\((.*?)\)\);', script.string, re.DOTALL)
                if json_str:
                    data = json.loads(json_str.group(1))
                    # Simpan data ke file JSON
                    with open('harga_pangan.json', 'w') as f:
                        json.dump(data, f, indent=4)
                    print("Data harga pangan telah berhasil disimpan ke harga_pangan.json")
                    return

        print("Data JSON tidak ditemukan.")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    get_harga_pangan()
