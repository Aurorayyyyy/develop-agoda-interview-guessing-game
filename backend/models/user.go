package models

type User struct {
	ID uint `gorm:"primaryKey;autoIncrement:true"`
	Username string `gorm:"unique"`
	Password string
}