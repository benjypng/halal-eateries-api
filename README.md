# hal-eateries-api

Academic Disclaimer: This API was created for academic purposes, and **should only be used** for academic purposes.

## **It should never be used for any monetization purposes.**

If there are objections from MUIS or any related Government agencies, please contact me directly and I can take down this API.

This API is a list of all the Halal eateries in Singapore, taken from the MUIS website. Please note that this is a snapshot taken on 22/2/2021.

Note:
Name and address details are wrapped in `<p>` tags. Spaces were also taken out to facilitate processing of the JSON data. For more details on the web scrape, please refer to its [Github page](https://github.com/hkgnp/halal-eateries).

### Endpoints

```
GET     https://sg-halal-eateries-api.herokuapp.com/halal-eateries

Results returned:
{
    "_id":"",
    "name":"",
    "add":""
}
```

#### Sample Results

```
{
    "_id": "6033debd9d50b247e4ee2dd6",
    "name": "<p>126ConnectionBakery</p>",
    "add": "<p>45OwenRoad01-297Singapore210045<br/>210045</p>"
},
```
