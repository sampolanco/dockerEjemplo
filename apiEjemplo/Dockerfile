FROM  openjdk:8-jdk-alpine
ADD target/*.jar project.jar
ENTRYPOINT ["sh", "-c", "java -jar /project.jar"]
