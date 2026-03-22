package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type sheetItem struct {
	RecId       int    `json:'RecId'`
	Name        string `json:"Name"`
	Type        string `json:"Type"`
	Create_Date string `Create_Date`
}

var sheetItems = []sheetItem{
	{RecId: 1, Name: "Test", Type: "test", Create_Date: ""},
}

func getSheetList(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, sheetItems)
}

func main() {
	fmt.Println("Running...")
	router := gin.Default()
	router.GET("/SheetList", getSheetList)

	router.Run("localhost:1213")
}
