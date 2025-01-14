#Get into interactive shell mode in docker container
docker exec -it <container-name> /bin/bash

##Open a shell in the broker container:
docker exec --workdir /opt/kafka/bin/ -it broker sh

###A topic is a logical grouping of events in Kafka. From inside the container, create a topic called test-topic:
./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic test-topic
