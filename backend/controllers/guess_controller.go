package controllers

import (
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/models"
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type GuessNumber struct {
	Number int 
}
var guessNumber GuessNumber
func Guess (c *gin.Context) {
	var guessInput models.GuessInput
	if err := c.ShouldBindJSON(&guessInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	if (guessNumber.Number == 0) {
		guessNumber.Number = generateNumber()
	}
	if (guessNumber.Number == int(guessInput.Number)) {
		c.JSON(http.StatusCreated, gin.H{"message": "create new guess number"})
		guessNumber.Number = generateNumber()
	}
}


func generateNumber() int {
	rand.Seed(time.Now().UnixNano())
	randNum := rand.Intn(10) + 1
	return randNum
}
