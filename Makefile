proyectname = thebluemax/pokedex

.PHONY: 

test_with_triton: ## Run tests with triton
		@docker run -u "$(id -u)" --rm -v "$(shell pwd)":/app trion/ng-cli-karma ng test

test_local: ## Run tests locally
		@ng test

build: ## Build the project
		@docker build -t $(proyectname) .
