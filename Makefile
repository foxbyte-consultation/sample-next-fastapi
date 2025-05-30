
ifeq ($(OS),Windows_NT)
	DETECTED_OS := Windows
else
	DETECTED_OS := $(shell uname -s)
endif

.PHONY: up
.PHONY: down
.PHONY: check

up:
	docker-compose build --no-cache
	docker-compose up -d
ifeq ($(DETECTED_OS),Windows)
	powershell -command "Start-Sleep -s 10"
else
	sleep 10
endif
	docker-compose exec api alembic upgrade head


down:
	docker compose down
	docker volume  rm message-board_mysql-data

check:
	docker compose exec mysql mysql -u user -p

