# ShExJavaWebsite

Run on linux
```bash
# install shex-java
git clone https://github.com/iovka/shex-java.git
cd shex-java/shex
git checkout dev
mvn -DskipTests clean install

cd ../..

git clone https://github.com/jdusart/ShExJavaWebsite.git
cd ShExJavaWebsite/ShExJavaWebsite
mvn spring-boot:run

```
