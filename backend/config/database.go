package config

import (
	"fmt"
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/models"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Init() *gorm.DB {

	var err error
	DB, err = connectionDatabase()
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}
	err = performMigration()
	if err!=nil{
		log.Fatalf("Could not auto migrate: %v", err)
	}

	return DB

}

func connectionDatabase() (*gorm.DB, error) {
	godotenv.Load(".env")
	username := getEnv("DB_USERNAME", "dev")
	password := getEnv("DB_PASSWORD", "devpass")
	host := getEnv("DB_HOST", "localhost")
	port := getEnv("DB_PORT", "3307")
	database := getEnv("DB_DATABASE", "localhost")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", username, password, host, port, database)
	fmt.Println(dsn)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info), // Enable logging for debugging
	})
	if err != nil {
		fmt.Println("gorm DB connection ", err)
		return nil, err
	}

	return db, nil
}

func performMigration() error{
	err:= DB.AutoMigrate(&models.User{})
	if err!=nil{
		return err
	}
	return nil
}

func getEnv(key string, defaultVaule string) string {
	value:= os.Getenv(key)
	if value==""{
		return defaultVaule
	}
	return value
}