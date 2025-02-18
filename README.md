React vite deployment 

deployment steps

step 1
npm run build
step 2

docker build -t developerlucky/luckyportfolio .

docker login

docker tag developerlucky/luckyportfolio developerlucky/luckyportfolio:latest

docker push developerlucky/luckyportfolio:latest


In ec2

sudo apt update  
sudo apt-get upgrade -y
install docker for ubuntu (https://docs.docker.com/engine/install/ubuntu/)

sudo docker pull developerlucky/luckyportfolio:latest
sudo docker run -d -p 80:80 developerlucky/luckyportfolio:latest
sudo docker ps




logs for cheack current project

sudo docker logs -f 1802fa9356ab



stop exesting contienr and remove project

sudo docker stop a2a8bc4ade0c
sudo docker rm a2a8bc4ade0c



ssh -i "MyHealthCareBackendKey.pem" ubuntu@ec2-13-202-65-134.ap-south-1.compute.amazonaws.com
