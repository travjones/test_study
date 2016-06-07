package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Data struct {
	One       int    `json:"one"`
	Two       int    `json:"two"`
	Three     int    `json:"three"`
	Four      int    `json:"four"`
	Age       int    `json:"age"`
	Autism    string `json:"autism"`
	Education string `json:"education"`
	Famaba    string `json:"famaba"`
	Income    string `json:"income"`
}

func dataPost(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Println("error reading req body")
	}

	data := string(body)
	fmt.Println(data)

	// var d Data

	// err = json.Unmarshal(body, &d)
	// if err != nil {
	// 	log.Println("error unmarshalling json")
	// }

}

func main() {
	fmt.Println("Running... Go to http://localhost:3000")
	http.Handle("/", http.FileServer(http.Dir("../client/dist")))
	http.HandleFunc("/data", dataPost)
	http.ListenAndServe(":3000", nil)
}
