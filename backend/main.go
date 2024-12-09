package main

import (
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/config"
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
    config.Init()

    r := gin.Default()
    r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		AllowCredentials: true,
	}))
    routes.SetupRoutes(r)

    r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}