From ubuntu:latest


RUN apt-get update -y \
  && apt-get -y install unzip

#RUN ALLURE_VERSION=2.14.0 \
#    && wget /tmp/allure-"$ALLURE_VERSION".tgz 'https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/"$ALLURE_VERSION"/allure-commandline-"$ALLURE_VERSION".tgz' \
##    && tar -xf /tmp/allure-"$ALLURE_VERSION".tgz --directory=/opt/ \
 #   && ln -s /opt/allure-"$ALLURE_VERSION"/bin/allure /usr/bin/allure \
 #   && allure --version

 
RUN apt-get update && apt-get install -y curl && apt-get install -y wget 

#### java v17
#RUN apt-get install libc6-i386 libc6-x32 curl -y &&\
#    wget --no-check-certificate -c --header "Cookie: oraclelicense=accept-securebackup-#cookie" https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz &&\
#    tar -xvzf jdk-17_linux-x64_bin.tar.gz && mv jdk-17.0.1 /opt/jdk-17.0.1


#### java v11
RUN apt-get -y install openjdk-11-jdk
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
RUN export JAVA_HOME



#### Install Maven
RUN apt-get update && apt-get install -y maven



# Installing NodeJS
RUN     curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
        apt-get install -y nodejs
        
RUN apt-get install -y @angular/cli


RUN apt-get update && apt-get install -y mysql-server mysql-client



