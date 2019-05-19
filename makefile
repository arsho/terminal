install:
	bash -c "yarn install"

run:
	bash -c "yarn start"

build:
	bash -c "yarn build"

deploy:
	bash -c "chmod 777 deploy.sh && ./deploy.sh"
