##
## MakeFile Command
## ------
##

build:
	docker-compose build --pull --parallel

restart:
	docker-compose restart

start:
	docker-compose up --remove-orphans --no-recreate

rm-build:
	docker-compose rm --stop --force

install: rm-build build start

stop:
	docker-compose stop
