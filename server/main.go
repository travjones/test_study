package main

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	_ "github.com/lib/pq"
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
	fmt.Println(r.RemoteAddr)
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Println("error reading req body")
	}

	data := string(body)
	fmt.Println(data)

	db, err := sql.Open("postgres", "user=dev password=dttuf352 dbname=test_study sslmode=disable")
	if err != nil {
		log.Println("could not connect to db")
	}

	stmt, err := db.Prepare("insert into data (data) values ($1)")
	if err != nil {
		log.Println("error inserting data", err)
	}

	_, err = stmt.Exec(data)
	if err != nil {
		log.Println("Error inserting data")
	}

	stmt.Close()
	db.Close()

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
