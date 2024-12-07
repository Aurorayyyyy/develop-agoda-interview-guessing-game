package routes

import (
	"github/com/Aurorayyyyy/develop-agoda-interview-guessing-game/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.POST("/login", controllers.Login)

	
}