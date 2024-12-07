package config

import (
	"fmt"
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/models"
	"log"
	"os"

	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/driver/mysql"
)

var DB *gorm.DB

func InIt() *gorm.DB {

	var err error
	DB, err = connectionDatabase()
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	return DB

}

func connectionDatabase() (*gorm.DB, error) {

	username := getEnv("DB_USERNAME", "dev")
	password := getEnv("DB_PASSWORD", "devpass")
	host := getEnv("DB_HOST", "localhost")
	port := getEnv("DB_PORT", "3306")
	database := getEnv("DB_NAME", "guess")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", username, password, host, port, database)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info), // Enable logging for debugging
	})
	if err != nil {
		fmt.Println("gorm DB connection ", err)
		return nil, err
	}

	return db, nil
}



func getEnv(key string, defaultVaule string) string {
	value:= os.Getenv(key)
	if value==""{
		return defaultVaule
	}
	return value
}