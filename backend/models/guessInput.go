package models

type GuessInput struct {
	Number uint `json:"number" binding:"required"`
}