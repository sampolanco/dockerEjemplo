# Project Title

Basic rest example in Spring

## Getting Started

### Prerequisites

Maven
STS

### Installing

run to pagkage application
  mvn clean package -DskipTests
run to create image
  docker build  -t spring-java-api:0.1 .
run to start database
  docker run --rm -d --name container-postgres-red --network red-proyecto  -e POSTGRES_PASSWORD=podocker -d -p 5432:5432 postgres:12-alpine
run to star java project
  docker run --rm -d --name container-java-api-red  --network red-proyecto -p 8080:8080 spring-java-api:0.1

## Running the tests

### Break down into end to end tests

## Deployment

## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Authors

* **SamuelPola** - [PurpleBooth](https://github.com/sampolanco)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
