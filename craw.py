import requests
import json
headers = {
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'x-foody-access-token': '7b9634bdd9bf448c026ddc2289f94df661222707f986d45a70e98ee3c3a30543b330d998a58a0bd88e9388eb6da665c22b5b9e9bd8d5e5967b3383ec30272946',
    'x-foody-api-version': '1',
    'x-foody-app-type': '1004',
    'x-foody-client-id':'1',
    'x-foody-client-language': 'vi',
    'x-foody-client-type': '6',
    'x-foody-client-version': '3.0.0',
    'content-type': "application/json;charset=UTF-8",
    'accept': 'application/json, text/plain, */*'
}
# https://gappapi.deliverynow.vn/api/delivery/get_browsing_infos
metadataRequest = requests.get('https://gappapi.deliverynow.vn/api/meta/get_metadata',headers=headers)
metadataFile = open("metadata.json", "a")
json.dump(metadataRequest.json(),metadataFile, ensure_ascii=False, indent=4)
metadataFile.close()


# payload = {"./craw/city_id":218,"delivery_ids":[99946,7039,95287,38669,126758]}
# payload2 = {"city_id":218,"delivery_ids":[100642,77710,78374,103912,16758,115661,128734,114993,142018,107418,119292,16604,45909,124291,115285,25786,4109,6357,83109,132571]}

# get_browsing_infos = requests.post('https://gappapi.deliverynow.vn/api/delivery/get_browsing_infos', data=json.dumps(payload2) , headers=headers)
# get_browsing_infos_file = open("./craw/get_browsing_infos2.json", "a")
# json.dump(get_browsing_infos.json(),get_browsing_infos_file, ensure_ascii=False, indent=4)
# get_browsing_infos_file.close()
