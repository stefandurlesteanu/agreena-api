init: docker-pull docker-build docker-up
up: docker-up
down: docker-down
destroy: docker-destroy
restart: down up

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

docker-destroy:
	docker-down -v
	docker-compose rm

docker-build:
	docker-compose build

container-rebuild:
	docker-compose up -d --no-deps --build

docker-pull:
	docker-compose pull
